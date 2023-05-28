import React, { useContext, useState } from 'react';



import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('')
    const { signin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (data) => {
        const { email, password } = data
        setLoginError(' ')

        signin(email, password)
            .then(result => {
                if (result.user?.email) {
                    navigate(from, { replace: true })

                }

            })
            .catch(err => {
                // console.log(err.message)
                setLoginError(err.message)
            })

    }




    return (
        <div className='h-[800px] flex justify-center items-center  '>

            <div className='shadow-lg p-10'>
                <h2 className='text-3xl text-center mb-3'>Login</h2>


                <form form onSubmit={handleSubmit(handleLogin)}>
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
                                    minLength: { value: 6, message: 'password must be 6 character or longer' }
                                }
                            )}
                            type="password" placeholder="Password here"
                            className="input input-bordered w-full max-w-[400px]" />
                        {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password ?</span>

                        </label>

                        <input type="submit" value="LOGIN"
                            className="  mt-3 btn btn-primary input input-bordered w-full
                             max-w-[400px]" />





                        <p>New to Doctors Clinic ? <Link to={'/signup'}><span className='text-secondary  cursor-pointer'>Create new account</span></Link> </p>
                        <div className="divider">OR</div>
                        <button className='btn  ' > CONTINUE WITH GOOGLE </button>
                        {loginError && <p className='text-red-500' >{loginError}</p>}



                    </div>




                </form>
            </div>




        </div>
    );
};

export default Login;