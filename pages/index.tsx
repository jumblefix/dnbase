import React from 'react';
import Link from 'next/link';

const Home = () => (
    <ul>
        <li>
            <Link href="/a" as="/a">
                <a href="/">a</a>
            </Link>
        </li>
        <li>
            <Link href="/b" as="/b">
                <a href="/">b</a>
            </Link>
        </li>
    </ul>
);

export default Home;
