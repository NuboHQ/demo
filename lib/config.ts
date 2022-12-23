import { prisma } from './prisma';
import { Regions } from './regions';

export type Config = {
  id: string;
  policy: Policy;
  regions: Regions;
};

export type Policy = {
  id: string;
  name: string;
};

export const getConfig = async () => {
  const config = await prisma.config.findFirst({
    where: { id: 'config' },
  });

  return config as Config;
};

export const getRegion = (config: Config, id: string) => {
  return config.regions[id];
};

export const getPolicyRegionId = (config: Config) => {
  if (config.policy.id === 'all') {
    return process.env.NUBO_REGION || 'unknown';
  }

  if (config.policy.id === 'gdpr') {
    return 'europe-west-milan';
  }

  if (config.policy.id === 'ccpa') {
    return 'us-west-san-francisco';
  }

  if (config.policy.id === 'lgpd') {
    return 'south-america-east-sao-paulo';
  }

  return 'unknown';
};
