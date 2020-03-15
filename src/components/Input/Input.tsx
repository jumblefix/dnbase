import React, { ReactElement } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Input({ children, className }: Props): ReactElement {
    return <p className={className}>{children}</p>;
}
