import React from 'react';
import { addAll } from '../src/utils/utils';
import UserCard from '../src/components/UserCard/UserCard';

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
    </div>
);

export default A;
