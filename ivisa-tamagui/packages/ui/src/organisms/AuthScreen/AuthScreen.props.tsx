export type LoginData = {
  email: string;
  password?: string;
};

export type RegisterData = {
  email: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};

export interface AuthScreenProps {
  logo?: React.ReactNode | string;
  title?: string;
  subtitle?: string;
  onLogin?: (data: LoginData) => Promise<void>;
  onRegister?: (data: RegisterData) => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
  socialProviders?: {
    name: string;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
  termsUrl?: string;
  privacyUrl?: string;
  isLoading?: boolean;
  defaultView?: 'login' | 'register';
  error?: string;
}
