import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

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

app.post('/api/assess', async (req, res) => {
  const { name, email, answers } = req.body;

  // TODO (Aryan): validate input
  // TODO (Aryan): call scoring service
  // TODO (Aryan): call AI service (generatePlan)
  // TODO (Aryan): call PDF service (generatePDF)
  // TODO (Aryan): call email service (sendPlanEmail)

  console.log('Received assessment for:', name, email, answers?.length, 'answers');

  res.json({ success: true, message: 'Plan sent successfully' });
});

// ─── Start ────────────────────────────────────────────────────────────────────

if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => console.log(`Jesse backend running on http://localhost:${PORT}`));
}
