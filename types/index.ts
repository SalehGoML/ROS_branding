export interface BrandFormData {
  name:    string
  website: string
  field:   string
}

export interface RegisterData {
  email:    string
  password: string
}

export interface NavLink {
  label:     string
  href:      string
  isActive?: boolean
}