import React from 'react';
import clock from '../../../assets/images/people2.png'

import InfoCard from './InfoCard';

const InfoCards = () => {

    const infoCards = [
        {
            id: 1,
            name: 'Opening Hours',
            description: " Open 9am to 5 pm everyday",
            icon: clock,
            bgColor: "bg-primary"
        },
        {
            id: 2,
            name: 'Visit our location',
            description: " Brooklyn, NY 10036, United States",
            icon: clock,
            bgColor: "bg-secondary"
        },

        {
            id: 3,
            name: 'Contact us now',
            description: " +000 123 456789",
            icon: clock,
            bgColor: "bg-neutral"
        },

    ]

    return (
        <div  className='grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m-6 '>
            {
                infoCards.map(card => <InfoCard key={card.id} card={card} />
                )

            }

        </div>
    );
};

export default InfoCards;