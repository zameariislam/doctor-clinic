import React from 'react';
import chairImage from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero mt-6 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chairImage} className="w-1/2 rounded-lg shadow-2xl" alt='banner' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn  text-white btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;