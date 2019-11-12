import React from 'react';
import { addAll } from '../src/utils/utils';

const A = () => (
    <div>
        <p>1,2,3</p>
        <p>{addAll(1, 2, 3)}</p>
    </div>
);

export default A;
