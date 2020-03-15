import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from '../../src/components/Card/Card';
import products from '../../src/data/products';

export default function Post(): ReactElement {
    const router = useRouter();
    const { slug } = router.query;
    const p = products.filter(i => i.slug === slug);

    if (!p.length) {
        return <h1>Not Found</h1>;
    }

    const product = p[0];

    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-gray-600 text-white flex-1 text-center p-4 w-full">
                    <Link href="/">
                        <a className="w-full" href="/">
                            Home
                        </a>
                    </Link>
                </div>
            </div>
            <h1 className="text-gray-700 text-center p-2">{product.name}</h1>
            <Card
                imgAlt={product.imgAlt}
                imgSrc={product.imgSrc}
                price={product.price}
                description={product.description}
                name={product.name}
            />
        </div>
    );
}
