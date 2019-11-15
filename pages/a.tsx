import React from 'react';
import { addAll } from '../src/utils/utils';
import UserCard from '../src/components/UserCard/UserCard';
import { Text, Title, Headline } from '../src/components/Text/Text';

const A = () => (
    <div>
        <p>1,2,3</p>
        <p>{addAll(1, 2, 3)}</p>
        <p>Hello world!</p>
        <p className="text-red-700">Red Text</p>
        <p className="text-green-700">Red Text</p>
        <p className="text-orange-700">Red Text</p>
        <p className="text-pink-700">Red Text</p>
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-md">
            <div className="m-auto ">
                <img
                    className="w-full"
                    src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="ChitChat Logo"
                />
                <div className="ml-6 pt-1">
                    <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
                    <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
                </div>
            </div>
        </div>
        <div className="h-10" />
        <UserCard />
        <div className="h-10" />
        <div className="w-64 mx-auto">
            <input
                className="bg-gray-100 focus:bg-white border-grey-400 focus:border-blue-400 text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-2 px-2 focus:outline-none"
                placeholder="Search here"
            />
        </div>
        <div className="h-10" />
        <h1 className="text-xl md:text-2xl lg:text-3xl px-2">
            Welcome Hello World! This is an example of rem unit in css
        </h1>

        <div className="h-10" />
        <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius, saepe, iure culpa animi voluptatem
            hic debitis tempora, expedita illum assumenda porro veniam odio incidunt ipsum cupiditate soluta magni sed.
        </Text>
        <div className="h-10" />
        <Title>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, corrupti. Eius itaque reiciendis placeat
            rem dolorum corporis doloribus repellat est! Totam, possimus explicabo mollitia est iusto qui accusamus
            pariatur odit!
        </Title>
        <div className="h-10" />
        <Headline>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam voluptas deserunt debitis nostrum impedit
            inventore expedita, reiciendis temporibus unde nihil consectetur facere quasi vero ipsam, provident eius
            aliquid eum.
        </Headline>
        <div className="h-10" />

        <button
            disabled
            type="button"
            className="ml-4 disabled:opacity-75 bg-blue-500 active:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Submit
        </button>
    </div>
);

export default A;
