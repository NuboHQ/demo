import { readFileSync } from 'fs';

export type Region = {
  id: string;
  location: string;
  country: string;
  active: boolean;
};

export type Regions = { [id: Region['id']]: Region };

export let regions: Regions = {};

export const loadRegions = () => {
  const regionsString = readFileSync('regions.json', 'utf-8');
  regions = JSON.parse(regionsString);

  return regions;
};

export const getRegion = (id: string) => {
  return regions[id];
};
