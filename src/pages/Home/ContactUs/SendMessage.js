import React from 'react';
import backgroundImage from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton';

const SendMessage = () => {
    return (
        <div className='my-16 py-4'
            style={{ background: `url(${backgroundImage})` }}
        >

            <div className='text-center '>
                <h4 className='text-primary text-2xl'>Contact Us</h4>
                <h2 className='text-white text-4xl my-5'>Stay connected with us</h2>


            </div>


            <div className='flex justify-center  '>
                <div className="form-control w-full max-w-xs space-y-2">
                    
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" /> 
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /> 
                    <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
                    
                    
                </div>
                
                
            </div>

            <div className='text-center mt-4'>
            <PrimaryButton>submit</PrimaryButton>
            </div>
            




        </div>
    );
};

export default SendMessage;