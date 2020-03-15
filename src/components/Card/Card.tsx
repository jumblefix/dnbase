import React, { ReactElement } from 'react';

interface Props {
    imgSrc: string;
    imgAlt: string;
    name: string;
    description: string;
    strikePrice?: string;
    price: string;
}

export default function Card(props: Props): ReactElement {
    const { imgSrc, imgAlt, name, description, strikePrice, price } = props;
    return (
        <div className="m-4 md:m-4 lg:m-4 shadow-md rounded border border-solid border-gray-200">
            <img className="block mx-auto rounded" src={imgSrc} alt={imgAlt} />
            <div className="p-1">
                <h2 className="py-1 text-lg text-gray-700">{name}</h2>
                <div className="flex justify-between">
                    <div>
                        <p className="leading-9 text-gray-600 text-sm float-left">{description}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xs line-through leading-9 text-gray-500 tracking-wide pr-1">{strikePrice}</p>
                        <h3 className="text-green-600 text-xl text-right tracking-wide"> {price} </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
