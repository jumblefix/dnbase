import React from 'react';

export default function Button(props: any) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { title } = props;
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button className="btn-blue" type="button" {...props}>
            {title}
        </button>
    );
}
