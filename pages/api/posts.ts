import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.status(200);
    res.end(JSON.stringify({ name: 'Hello' }));
};
