import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date())



    return (
        <div className='my-16 bg-red-200'>
            <AppoinmentBanner selected={selected} setSelected={setSelected} />
            <AvailableAppoinment selected={selected} />

        </div>
    );
};

export default Appoinment;