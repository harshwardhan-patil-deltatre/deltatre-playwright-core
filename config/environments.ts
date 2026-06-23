import { Environment, EnvironmentConfig } from '@core/types';

const environmentConfigs: Record<Environment, EnvironmentConfig> = {
  dev: {
    baseURL: 'https://dev.example.com',
  },
  staging: {
    baseURL: 'https://fe-en.mls-stgv2.deltatre.digital/',
  },
  production: {
    baseURL: 'https://example.com',
  },
};

/**
 * Resolve and return the current environment configuration
 * @returns The resolved environment configuration
 * @throws Error if an unknown environment is provided
 */
function getEnvironmentConfig(): EnvironmentConfig {
  const env = (process.env.ENV || 'staging') as Environment;

  if (!environmentConfigs[env]) {
    throw new Error(
      `Unknown environment: ${env}. Supported environments are: ${Object.keys(environmentConfigs).join(', ')}`
    );
  }

  return environmentConfigs[env];
}

export const environmentConfig = getEnvironmentConfig();
