import { writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const config = req.body;
    writeFileSync('nubo-config.json', JSON.stringify(config, null, 2), 'utf-8');

    return res.json({ message: 'Updated config' });
  }

  res.status(400).json({ message: `Invalid method: ${req.method}` });
}
