import { readFileSync } from 'fs';

export type NuboConfig = {
  policy: NuboConfigPolicy | null;
  regions: Regions;
};

export type NuboConfigPolicy = {
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

export let config: NuboConfig = { policy: null, regions: {} };

export const loadConfig = () => {
  const configString = readFileSync('nubo-config.json', 'utf-8');
  config = JSON.parse(configString);

  return config;
};

export const getRegion = (id: string) => {
  return config.regions[id];
};
