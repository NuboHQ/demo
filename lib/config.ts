import { readFileSync } from 'fs';

export type Config = {
  policy: Policy;
  regions: Regions;
};

export type Policy = {
  id: string;
  name: string;
};

export type Region = {
  id: string;
  location: string;
  country: string;
  flag: string;
  active: boolean;
};

export type Regions = { [id: Region['id']]: Region };

export let config: Config = {
  policy: { id: 'all', name: 'All regions' },
  regions: {},
};

export const loadConfig = () => {
  const configString = readFileSync('nubo-config.json', 'utf-8');
  config = JSON.parse(configString);

  return config;
};

export const getRegion = (id: string) => {
  return config.regions[id];
};

export const getPolicyRegionId = () => {
  if (config.policy.id === 'all') {
    return process.env.NUBO_REGION || 'unknown';
  }

  if (config.policy.id === 'gdpr') {
    return 'europe-west-milan';
  }

  if (config.policy.id === 'ccpa') {
    return 'us-west-california';
  }

  if (config.policy.id === 'lgpd') {
    return 'south-america-east-sao-paulo';
  }

  return 'unknown';
};
