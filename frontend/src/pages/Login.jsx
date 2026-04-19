import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { loginUser } from "../store/authSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";


const loginSchema = z.object({
    emailId: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password should be at least 8 characters long")
})

function Login () {   

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if(isAuthenticated){
            navigate('/');
        }
    }, [isAuthenticated, navigate]); //you can remove navigate from dependency array as well 

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    const { register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(loginSchema)});

    return (
        <div className="min-h-screen flex items-center justify-center p-4"> {/* Centering container */}
            <div className="card w-96 bg-base-100 shadow-xl"> {/* Existing card styling */}
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl">Leetcode</h2> {/* Centered title */}
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Existing form fields */}

                        <div className="form-control  mt-4">
                            <label className="label mb-1">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="het@gmail.com"
                                className={`input input-bordered ${errors.emailId && 'input-error'}`}
                                {...register('emailId')}
                            />
                            {errors.emailId && (
                                <span className="text-error">{errors.emailId.message}</span>
                            )}
                        </div>

                        <div className="form-control mt-4">
                            <label className="label mb-1">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={`input input-bordered ${errors.password && 'input-error'}`}
                                {...register('password')}
                            />
                            {errors.password && (
                                <span className="text-error">{errors.password.message}</span>
                            )}
                        </div>

                        <div className="form-control mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );

}
  
export default Login;