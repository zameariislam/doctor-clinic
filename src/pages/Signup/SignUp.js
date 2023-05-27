import React, { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSignUp = (data) => {
        const { name, email, password } = data
        console.log(data)

        createUser(email, password)
            .then(result => {
                if (result.user?.email) {
                    navigate(from, { replace: true })
                }

            })
            .catch(err => console.log(err.message))


    };
    return (
        <div className='h-[800px] flex justify-center items-center  '>


            <div className='shadow-lg p-10'>
                <h2 className='text-2xl text-center mb-3'>SignUp</h2>


                <form form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>

                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text" placeholder="Name here"
                            className="input input-bordered w-full max-w-[400px]" />
                        {errors.name && <p className='text-red-500' >{errors.name?.message}</p>}

                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Eamil</span>

                        </label>

                        <input
                            {...register("email", { required: "Email Address is required" })}
                            type="email" placeholder="Email here"
                            className="input input-bordered w-full max-w-[400px]" />
                        {errors.email && <p className='text-red-500' >{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>


                        <input
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6, message: 'password must be 6 character or longer',


                                    },
                                    pattern: {
                                        value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
                                        message: 'password must have one uppercase,one lowercase and one number'
                                    }
                                }
                            )}
                            type="password" placeholder="Password here"
                            className="input input-bordered w-full max-w-[400px]" />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}

                        <input type="submit" value="SIGNUP"
                            className="  mt-3 btn btn-primary input input-bordered w-full
                             max-w-[400px]" />
                        <p> Already have account ? <Link to={'/login'}><span className='text-secondary  cursor-pointer'>please login</span></Link> </p>
                        <div className="divider">OR</div>
                        <button className='btn  ' > CONTINUE WITH GOOGLE </button>



                    </div>




                </form>
            </div>



        </div>
    );
};

export default SignUp;