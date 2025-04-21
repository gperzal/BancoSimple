export interface AuthResponse {
    token: string;
    email: string;
    roles: ("CLIENT" | "PREMIUM" | "ADMIN" | "EXECUTIVE")[];
    fullName: string;
  }
  
  export interface Credentials {
    email: string;
    password: string;
  }
  
  export interface RegisterData {
    firstName: string,
    lastName: string,
    documentType: string,
    documentNumber: string,
    birthDate: string,
    phone: string,
    email: string,
    passwordHash: string
  }
  