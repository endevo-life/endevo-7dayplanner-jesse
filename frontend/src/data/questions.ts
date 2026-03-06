// 10 assessment questions and readiness tier data

export interface QuestionAnswer {
  label: string;
  text: string;
  score: number;
}

export interface Question {
  id: string;
  number: number;
  domain: string;
  weight: number;
  text: string;
  answers: QuestionAnswer[];
}

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    number: 1,
    domain: 'Access & Ownership Risk',
    weight: 1,
    text: 'If you died tomorrow, could your loved ones access the data on your phone?',
    answers: [
      { label: 'A', text: 'Yes — I have Legacy Contacts set up with multiple people identified.', score: 10 },
      { label: 'B', text: 'Yes — I have one Legacy Contact set up.', score: 6 },
      { label: 'C', text: 'Maybe — they know my password but nothing is formally set up.', score: 3 },
      { label: 'D', text: 'No — no one knows my password and I use biometrics only.', score: 0 },
    ],
  },
  {
    id: 'q2',
    number: 2,
    domain: 'Access & Ownership Risk',
    weight: 1,
    text: 'How many logins and passwords do you have across all your accounts?',
    answers: [
      { label: 'A', text: 'Under 25 — I keep things streamlined.', score: 10 },
      { label: 'B', text: 'Around 25–100 — a manageable mix.', score: 6 },
      { label: 'C', text: 'Over 100 — I\'ve lost count.', score: 3 },
      { label: 'D', text: 'Way too many to count — it\'s genuinely overwhelming.', score: 0 },
    ],
  },
  {
    id: 'q3',
    number: 3,
    domain: 'Data Loss Risk',
    weight: 1,
    text: 'What do you think happens to your social media accounts after you die?',
    answers: [
      { label: 'A', text: 'I know exactly — I\'ve set my account memorialization preferences already.', score: 10 },
      { label: 'B', text: 'They\'ll probably become ghost accounts, frozen in time.', score: 6 },
      { label: 'C', text: 'They could become zombie accounts living on the dark web forever.', score: 3 },
      { label: 'D', text: 'Honestly, I have no idea — I\'ve never thought about it.', score: 0 },
    ],
  },
  {
    id: 'q4',
    number: 4,
    domain: 'Platform Limitation Risk',
    weight: 1,
    text: 'Have you designated someone to manage your digital legacy — logins, social media, memberships, subscriptions — if something happens to you?',
    answers: [
      { label: 'A', text: 'Yes — it\'s documented and the right person already has access.', score: 10 },
      { label: 'B', text: 'I have a document with all my logins but no one else has it.', score: 6 },
      { label: 'C', text: 'I\'ve been meaning to do this — it\'s on my list.', score: 3 },
      { label: 'D', text: 'I wouldn\'t even know where to start.', score: 0 },
    ],
  },
  {
    id: 'q5',
    number: 5,
    domain: 'Stewardship Risk',
    weight: 1,
    text: 'Do the significant people in your life know what you want to happen upon your death or incapacitation?',
    answers: [
      { label: 'A', text: 'Yes — my wishes are recorded in a document and shared with them.', score: 10 },
      { label: 'B', text: 'Yes — I\'ve shared my wishes verbally but nothing is written down.', score: 6 },
      { label: 'C', text: 'Not really — I\'m not sure what my wishes are yet.', score: 3 },
      { label: 'D', text: 'No — we\'re all uncomfortable talking about it.', score: 0 },
    ],
  },
  {
    id: 'q6',
    number: 6,
    domain: 'Access & Ownership Risk',
    weight: 1,
    text: 'Do you currently use a password manager to store your logins and credentials?',
    answers: [
      { label: 'A', text: 'Yes — I use one consistently and it\'s up to date.', score: 10 },
      { label: 'B', text: 'Yes — but I don\'t use it consistently or it\'s out of date.', score: 6 },
      { label: 'C', text: 'No — I rely on my browser or memory.', score: 3 },
      { label: 'D', text: 'No — I\'ve never used one and don\'t know where to start.', score: 0 },
    ],
  },
  {
    id: 'q7',
    number: 7,
    domain: 'Stewardship Risk',
    weight: 1,
    text: 'Where do you store your most important documents — insurance policies, financial account details, key instructions?',
    answers: [
      { label: 'A', text: 'In a secure digital vault or encrypted folder, organised and accessible.', score: 10 },
      { label: 'B', text: 'Across a mix of places — some digital, some physical, not well organised.', score: 6 },
      { label: 'C', text: 'Mostly in physical files at home — no real digital backup.', score: 3 },
      { label: 'D', text: 'Honestly, I\'m not sure where everything is.', score: 0 },
    ],
  },
  {
    id: 'q8',
    number: 8,
    domain: 'Data Loss Risk',
    weight: 1,
    text: 'Do you use cloud storage (like iCloud, Google Drive, or Dropbox) to back up important personal files and photos?',
    answers: [
      { label: 'A', text: 'Yes — everything important is backed up and organised in the cloud.', score: 10 },
      { label: 'B', text: 'Yes — I have cloud storage but it\'s disorganised.', score: 6 },
      { label: 'C', text: 'Partially — some things are backed up but not everything critical.', score: 3 },
      { label: 'D', text: 'No — I rely on local storage only (my phone or hard drive).', score: 0 },
    ],
  },
  {
    id: 'q9',
    number: 9,
    domain: 'Platform Limitation Risk',
    weight: 1,
    text: 'Have you enabled two-factor authentication (2FA) on your most important accounts?',
    answers: [
      { label: 'A', text: 'Yes — 2FA is enabled on all critical accounts (banking, email, social).', score: 10 },
      { label: 'B', text: 'Yes — on some accounts, but not all.', score: 6 },
      { label: 'C', text: 'I\'ve heard of it but haven\'t set it up.', score: 3 },
      { label: 'D', text: 'No — I didn\'t know this was something I should do.', score: 0 },
    ],
  },
  {
    id: 'q10',
    number: 10,
    domain: 'Access & Ownership Risk',
    weight: 1,
    text: 'If you had to hand over access to all your digital accounts to a trusted person right now, how long would it take?',
    answers: [
      { label: 'A', text: 'Under an hour — everything is documented and ready to share securely.', score: 10 },
      { label: 'B', text: 'A few hours — I\'d need to gather and organise things first.', score: 6 },
      { label: 'C', text: 'A full day or more — it would take serious effort.', score: 3 },
      { label: 'D', text: 'It would be nearly impossible — I don\'t know where to start.', score: 0 },
    ],
  },
];

export const READINESS_TIERS = {
  champion: {
    label: 'Peace Champion',
    emoji: '🏆',
    color: '#22c55e',
    opening: "You're genuinely ahead of most people. Let's make sure it stays that way.",
    priority: 'Quarterly review + legacy contact verification',
  },
  onway: {
    label: 'On Your Way',
    emoji: '✅',
    color: '#3b82f6',
    opening: "You've started — now let's close the gaps before they become problems.",
    priority: 'Address lowest-scoring domain first',
  },
  clarity: {
    label: 'Getting Clarity',
    emoji: '💡',
    color: '#f59e0b',
    opening: "You're more aware than most. A few focused steps will change everything.",
    priority: 'Build digital vault + designate legacy contact',
  },
  fresh: {
    label: 'Starting Fresh',
    emoji: '🌱',
    color: '#ef4444',
    opening: 'No worries — this is exactly the right place to start. Jesse will guide you.',
    priority: 'Full onboarding — flag as highest-priority lead',
  },
};

export function getTier(score: number) {
  if (score >= 85) return READINESS_TIERS.champion;
  if (score >= 60) return READINESS_TIERS.onway;
  if (score >= 35) return READINESS_TIERS.clarity;
  return READINESS_TIERS.fresh;
}
