import React from 'react';
import { format } from 'date-fns';

const AvailableAppoinment = ({ selected }) => {
    return (
        <div className='mt-16'>
            <p className='text-secondary text-center font-bold'>Available Services on {format(selected, "PP")}</p>

        </div>
    );
};

export default AvailableAppoinment;