import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LeftSide from './LeftSide';
import whiteLogo from '../../assets/logo-white.png'
import axiosWrapper from '../../utils/axiosBase';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axiosWrapper.post(`api/login`, data)
            .then(res => {
                toast.success(res.data.message)
                if (res.status === 200) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    setTimeout(()=>{
                        reset();
                        window.location.href = "/"
                    },1500)
                }
            })
            .catch(err => {
                console.log(err.response.data);
                if(err.response.data.message){
                    toast.warning(err.response.data.message);
                }
            })
    };

    return (
        <div className='flex h-screen'>
            <div className='w-5/12 hidden lg:block'><LeftSide /></div>
            <div className='lg:w-7/12 '>
                <div className='lg:mx-24 m-8 lg:my-6'>
                    <img className='w-24 my-4 lg:hidden' src={whiteLogo} alt="" />
                    <h2 className='text-3xl text-left font-bold'>Welcome back!</h2>
                    <p className='text-xl text-gray-500 mt-3 text-left font-semibold'>Sign in to continue</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl mt-3">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className="input text-xl input-lg input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-xl text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-xl text-red-500">{errors.email.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-xl mt-3">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input text-xl input-lg input-bordered w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a six character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-xl text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text text-xl text-red-500">{errors.password.message}</span>}
                            </label>
                            {/* {signInError} */}
                            <p className='text-xl'>Forgot your password? <span className='text-blue-600'>Reset</span></p>
                            <input className='btn btn-primary input-lg w-full my-8 text-white' type="submit" value="Sign In" />
                            <p className='text-xl'>Don't have an account? <Link to="/signup" className='text-secondary'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;