import React, { use } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { Link } from 'react-router';

const Login = () => {
    const { signInUser, setUser } = use(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password).then(result => {
            setUser(result.user.email);



        })
            .catch(error => {
                console.log(error);
            });



    }
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h1 className='text-2xl font-bold text-center text-primary'>Login Form</h1>
                                <label className="label font-bold">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label font-bold">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover font-bold">Forgot password?</a></div>
                                <div>
                                    <button className='btn border border-blue-500 w-full hover:bg-primary hover:text-white'>Continue with Google</button>
                                </div>
                                <button className="btn bg-primary text-white mt-4">Login</button>
                                <p className='text-xl'><span className='font-light'>New to this Website? </span><Link className='text-blue-500 font-bold hover:underline' to='/registration'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;