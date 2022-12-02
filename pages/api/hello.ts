// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { loadConfig, Regions, regions } from '@/lib/config';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Regions | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  loadConfig();

  res.json(regions);
}
