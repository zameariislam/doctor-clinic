import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5  bg-red-500'>
            <Banner />
            <InfoCards />
            <Services />

        </div>
    );
};

export default Home;