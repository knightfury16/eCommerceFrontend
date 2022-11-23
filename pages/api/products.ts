import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
// import products from '../../utils/data/products';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  const products = await (await fetch('http://localhost:4000/api/products')).json();
  // console.log(products)
  res.json(products)
};
