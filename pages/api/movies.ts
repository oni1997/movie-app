import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;

  if (!q) {
    res.status(400).json({ error: 'Query parameter q is required' });
    return;
  }

  try {
    const response = await fetch(`https://search.imdbot.workers.dev/?q=${q}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
