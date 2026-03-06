// TODO: implement score calculation from answers
import type { UserAnswers } from '../types';

export function calculateScore(answers: UserAnswers): number {
  return Object.values(answers).reduce((sum, a) => sum + a.score, 0);
}

export function getDomainBreakdown(answers: UserAnswers) {
  // TODO: track raw score + max per domain, return { domain: { raw, max, pct } }
  return {};
}

export function getLowestDomain(breakdown: Record<string, { pct: number }>): string {
  // TODO: return domain key with lowest pct
  return '';
}
