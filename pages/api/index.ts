import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
    id: number;
    title: string;
}

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.status(200);

    const listOfPosts: Post[] = [
        {
            id: 1,
            title: 'Title one',
        },
    ];

    res.end(JSON.stringify({ posts: listOfPosts }));
};
