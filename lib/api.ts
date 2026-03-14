const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('ros_token') : null

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'خطای سرور')
  }

  return data
}

// Auth
export const authAPI = {
  register: (body: { email: string; password: string; full_name: string; phone?: string }) =>
    request<{ token: string; user: User }>('/auth/register', { method: 'POST', body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    request<{ token: string; user: User }>('/auth/login', { method: 'POST', body: JSON.stringify(body) }),

  me: () => request<User>('/auth/me'),
}

// Brand
export const brandAPI = {
  create: (body: BrandCreateInput) =>
    request<Brand>('/brands', { method: 'POST', body: JSON.stringify(body) }),

  get: () => request<Brand>('/brands/me'),

  update: (id: string, body: Partial<BrandCreateInput>) =>
    request<{ message: string }>(`/brands/${id}`, { method: 'PUT', body: JSON.stringify(body) }),

  updatePhase: (id: string, phase: number) =>
    request<{ message: string }>(`/brands/${id}/phase`, { method: 'PUT', body: JSON.stringify({ phase }) }),
}

// Analysis
export const analysisAPI = {
  create: (body: AnalysisCreateInput) =>
    request<Analysis>('/analyses', { method: 'POST', body: JSON.stringify(body) }),

  getByBrand: (brandId: string) =>
    request<Analysis[]>(`/analyses/brand/${brandId}`),

  getScores: (brandId: string) =>
    request<ChannelScore[]>(`/analyses/brand/${brandId}/scores`),
}

// Contact
export const contactAPI = {
  submit: (body: ContactForm) =>
    request<{ message: string; id: string }>('/contact', { method: 'POST', body: JSON.stringify(body) }),
}

// Types
export interface User {
  id: string
  email: string
  full_name: string
  phone: string
  role: string
  is_verified: boolean
  created_at: string
}

export interface Brand {
  id: string
  user_id: string
  name: string
  industry: string
  description: string
  has_strategy: boolean
  phase: number
  score: number
  personality: string[]
  values: string[]
  tone: string
  created_at: string
  updated_at: string
}

export interface BrandCreateInput {
  name: string
  industry: string
  description?: string
  personality?: string[]
  values?: string[]
  tone?: string
}

export interface Analysis {
  id: string
  brand_id: string
  channel: string
  score: number
  data: string
  created_at: string
}

export interface AnalysisCreateInput {
  brand_id: string
  channel: string
  score: number
  data: Record<string, number>
}

export interface ChannelScore {
  channel: string
  personality: number
  tone: number
  values: number
  status: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}
