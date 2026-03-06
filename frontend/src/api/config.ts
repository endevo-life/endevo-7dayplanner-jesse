// API base URL — set VITE_API_URL in .env.local
const raw = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const API_BASE_URL = raw.startsWith('http') ? raw : `https://${raw}`;

export const API_ENDPOINTS = {
  assess: `${API_BASE_URL}/api/assess`,
};
