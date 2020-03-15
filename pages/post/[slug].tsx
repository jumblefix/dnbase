import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
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
            <Card
                imgAlt={product.imgAlt}
                imgSrc={product.imgSrc}
                price={product.price}
                productDescription={product.productDescription}
                productName={product.productName}
            />
        </div>
    );
}
