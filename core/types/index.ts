export type Environment = 'dev' | 'staging' | 'production';

/** Test user credentials interface */
export interface TestUser {
  email: string;
  password: string;
}

/** Environment configuration interface */
export interface EnvironmentConfig {
  baseURL: string;
}
