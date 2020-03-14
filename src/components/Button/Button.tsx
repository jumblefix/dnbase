import React from 'react';

export default function Button(props: any) {
    const { title } = props;
    return (
        <button className="btn-blue" type="button" {...props}>
            {title}
        </button>
    );
}
