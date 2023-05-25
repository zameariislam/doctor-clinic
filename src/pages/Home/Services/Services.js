import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        },
    ]




    return (
        <div>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold '>OUR SERVICE</h3>
                <h2 className='text-3xl font-light '>Service We Provide</h2>



            </div>

            <div className='grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m-16  '>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }


            </div>


        </div>

    );
};

export default Services;