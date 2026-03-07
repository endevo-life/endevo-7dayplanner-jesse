
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { score } from './services/scoring';
import { generatePlan } from './services/ai';
import { generatePDF } from './services/pdf';
import { sendPlanEmail } from './services/email';
import { asyncHandler, errorHandler, notFoundHandler } from './middleware/errorHandler';
import type { AnswerLetter } from './types/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    ...(process.env.FRONTEND_URLS?.split(',') ?? []),
  ],
}));

// ─── Health check ─────────────────────────────────────────────────────────────

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    anthropic: !!process.env.ANTHROPIC_API_KEY,
    resend: !!process.env.RESEND_API_KEY,
    env: process.env.NODE_ENV,
  });
});

// ─── Main assessment route ────────────────────────────────────────────────────

app.post('/api/assess', asyncHandler(async (req, res) => {
  const { name, email, answers: rawAnswers } = req.body;

  if (!name || !email || !rawAnswers) {
    res.status(400).json({ success: false, message: 'Missing name, email, or answers', code: 'VALIDATION_ERROR' });
    return;
  }

  // Convert frontend format { q1_phone_access: { answer: 'A', ... } }
  // to backend scoring format [{ q: 1, answer: 'A' }]
  const answers = Object.entries(rawAnswers as Record<string, { answer: string }>)
    .map(([key, val]) => ({
      q: parseInt(key.match(/^q(\d+)/)?.[1] ?? '0', 10),
      answer: val.answer as AnswerLetter,
    }))
    .filter(a => a.q > 0);

  const scoringResult = score(answers);
  const payload = { name, email, ...scoringResult };

  const { plan } = await generatePlan(payload);

  const pdfBuffer = await generatePDF({
    name,
    readiness_score: scoringResult.readiness_score,
    tier:            scoringResult.tier,
    domain_scores:   scoringResult.domain_scores,
    plan,
  });

  await sendPlanEmail({
    name,
    email,
    score: scoringResult.readiness_score,
    tier:  scoringResult.tier,
    pdfBuffer,
  });

  console.log('Assessment complete for:', name, '| Score:', scoringResult.readiness_score, '| Tier:', scoringResult.tier);

  res.json({ success: true, message: 'Plan sent successfully' });
}));

// ─── Start ────────────────────────────────────────────────────────────────────

if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => console.log(`Jesse backend running on http://localhost:${PORT}`));
}
