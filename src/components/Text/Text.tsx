import React from 'react';

interface TextProps {
    children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
    return <p className="text-sm lg:text-base px-2">{children}</p>;
};

export const Title = ({ children }: TextProps) => {
    return <h2 className="text-md md:text-1xl lg:text-2xl px-2">{children}</h2>;
};

export const Headline = ({ children }: TextProps) => {
    return <h1 className="text-xl md:text-2xl lg:text-3xl px-2">{children}</h1>;
};
