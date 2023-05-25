import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonial from '../Testimonial/Testimonial';
import SendMessage from '../ContactUs/SendMessage';



const Home = () => {
    return (
        <div className='mx-5  bg-red-200'>
            <Banner />
            <InfoCards />
            <Services />
            <MakeAppoinment />
            <Testimonial />
            <SendMessage />




        </div>
    );
};

export default Home;