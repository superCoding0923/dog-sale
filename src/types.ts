export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface Match {
  match: string;
}

export interface AuthResponse {
  message: string;
}

export interface PaginatedResponse {
  resultIds: string[];
  total: number;
  next?: string;
  prev?: string;
}