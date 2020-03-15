import React from 'react';
import Link from 'next/link';
import Card from '../src/components/Card/Card';
import products from '../src/data/products';

const Home = () => (
    <div className="container mx-auto">
        <h1 className="text-center text-lg p-1 lg:text-left">Welcome</h1>
        <div className="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500 h-32" />
        <div className="bg-gray-200 h-auto">
            <div className="flex">
                <div className="flex-1 bg-gray-600 px-4 py-4 text-center text-white">One</div>
                <div className="flex-1 bg-gray-600 px-4 py-4 text-center text-white">Two</div>
                <div className="flex-1 bg-gray-600 px-4 py-4 text-center text-white">Three</div>
            </div>
        </div>
        <div className="px-2 py-1 md:px-4 lg:px-4">
            <img
                className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                src="/img/17.jpg"
                alt="Woman's Face"
            />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row items-stretch justify-start">
            {products.map(i => (
                <Link key={i.id} href="/post/[slug]" as={`/post/${i.slug}`}>
                    <a href={`/post/${i.slug}`}>
                        <Card
                            imgSrc={i.imgSrc}
                            imgAlt={i.imgAlt}
                            price={i.price}
                            strikePrice={i.strikePrice}
                            description={i.description}
                            name={i.name}
                        />
                    </a>
                </Link>
            ))}
        </div>
    </div>
);

export default Home;
