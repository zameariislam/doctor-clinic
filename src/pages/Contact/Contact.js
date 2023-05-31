
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)
    }
    const watchUsername = watch('name')



    return (
        <div className='h-[800px] flex justify-center items-center' >
            <div className='shadow-lg p-10'>


                <form onSubmit={handleSubmit(onSubmit)} >
                    <h1 className='text-center '>Contact Form</h1>
                    <h1 className='text-center '> Watched Value{watchUsername}</h1>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text"
                            {...register('name', {
                                required: 'Name should be required',
                                // minLength: { value: 3, message: "Name should be atleast 3 character" }
                                validate: (value) => value.length > 3


                            })}
                            placeholder="Name here" className="input input-bordered w-full max-w-[400px]" />


                        {errors.name && <p >{errors.name?.message}</p>}
                        {errors.name && <p >Name should be at least 4 character</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Email here"
                            {...register('email', {
                                required: "Email is required",
                                validate: (fieldValue) => {
                                    return fieldValue !== 'zameari@gmail.com' || 'Enter a different mailaddress'

                                }

                            })}

                            className="input input-bordered w-full max-w-[400px]" />
                        {errors.email && <p >{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="****"
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
                                    message: 'password must have one uppercase,one lowercase and one number'
                                }
                            }



                            )}
                            className="input input-bordered w-full max-w-[400px]" />

                    </div>
                    <input type="submit" value={'SUBMIT'} className="mt-2 btn  w-full max-w-[400px]" />






                </form>
                {errors.password && <p >{errors.password?.message}</p>}
                <DevTool control={control} />


            </div>






        </div>
    );
};

export default Contact;