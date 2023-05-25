import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import bgImage from '../../../assets/images/appointment.png'

import PrimaryButton from '../../../components/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section
            style={{ background: `url(${bgImage})` }}
            className='mt-32 '>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="  hidden md:block md:-mt-32  md:w-1/2 rounded-lg shadow-2xl" alt='doctor' />
                    <div>
                        <h2 className=" font-bold text-primary">Appointment</h2>
                        <h1 className='text-4xl text-white  font-bold'>Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default MakeAppoinment;