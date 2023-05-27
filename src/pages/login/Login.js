import React from 'react';


import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data, setData] = useState("");
    
    const onSubmit = data => console.log(data);




    return (
        <div className='h-[800px] flex justify-center items-center  '>

            <div className='shadow-lg p-10'>
                <h2 className='text-3xl text-center mb-3'>Login</h2>
                

                <form form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Eamil</span>

                        </label>

                        <input {...register("email")} type="email" placeholder="Email here"
                            className="input input-bordered w-full max-w-[400px]" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>

                        <input {...register("password")} type="password" placeholder="Password here"
                            className="input input-bordered w-full max-w-[400px]" />
                        <label className="label">
                            <span className="label-text">Forget Password ?</span>

                        </label>

                        <input type="submit" value="LOGIN"
                            className="  mt-3 btn btn-primary input input-bordered w-full
                             max-w-[400px]" />
                        <p>New to Doctors Clinic ? <Link to={'/signup'}><span className='text-secondary  cursor-pointer'>Create new account</span></Link> </p>
                        <div className="divider">OR</div>
                        <button className='btn  ' > CONTINUE WITH GOOGLE </button>



                    </div>
                    <p>{data}</p>



                </form>
            </div>




        </div>
    );
};

export default Login;