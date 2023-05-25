import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import BookingModal from '../../../components/BookingModal';

const AvailableAppoinment = ({ selected }) => {

    const [appoinmentOptions, setAppoinmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)


    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))


    }, [])


    return (
        <section className='mt-16'>
            <p className='text-secondary text-center font-bold'>Available Services on {format(selected, "PP")}</p>


            <div className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 '>
                {
                    appoinmentOptions.map(option => <AppoinmentOption key={option._id}
                        setTreatment={setTreatment}
                        option={option} />)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment}
                setTreatment={setTreatment}
                 selected={selected} ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppoinment;