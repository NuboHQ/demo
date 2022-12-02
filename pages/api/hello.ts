// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { loadRegions, Regions, regions } from '@/lib/regions';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Regions | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  loadRegions();

  res.json(regions);
}
