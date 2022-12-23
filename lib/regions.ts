export type Region = {
  id: string;
  location: string;
  country: string;
  flag: string;
  active: boolean;
};

export type Regions = { [id: Region['id']]: Region };

export const regions: {
  [region: string]: { country: string; location: string };
} = {
  'europe-west-london': {
    country: 'GB',
    location: 'London, UK',
  },
  'us-east-new-york': {
    country: 'US',
    location: 'New York, USA',
  },
  'us-west-san-francisco': {
    country: 'US',
    location: 'California, USA',
  },
};

export const getRegion = (regionId: string) => {
  return regions[regionId];
};
