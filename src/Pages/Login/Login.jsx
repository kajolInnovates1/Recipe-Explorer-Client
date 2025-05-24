import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Components/Firebase/init.firebase';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log In Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log(result.user);
                setUser(result.user);
                if (result.user) {
                    navigate('/');


                }
            })
            .catch(error => {
                // console.error("Login Error:", error.code, error.message);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                });
            });


    }


    const handleForget = () => {
        if (!email) {
            toast.error('Please Enter Your email and reset password');
            return;
        }
        sendPasswordResetEmail(auth, email).then(() => {

            toast.success('password reset email send please check email inbox');
        }).catch(error => {
            toast.error(error);
        })
    }





    const handlegoogleLogin = () => {

        const provider = new GoogleAuthProvider();



        signInWithPopup(auth, provider)
            .then(result => {
                // console.log(result);
                setUser(result.user);


                const userinfodata = {
                    email: result?.user?.email,
                    name: result?.user?.displayName,
                    photo: result?.user?.photoURL


                }
                fetch('https://assignment-10-server-five-wine.vercel.app//user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userinfodata)
                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Registration Succesfull!",
                                icon: "success",
                                draggable: true
                            });


                        }
                    }

                    );
                if (result.user) {
                    navigate('/');

                }
            })
            .catch(error => {
                toast.error(error);


            });
    }


    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">
                <ToastContainer
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h1 className='text-2xl font-bold text-center text-primary'>Login Form</h1>
                                <label className="label font-bold">Email</label>
                                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} className="input w-full" placeholder="Email" />
                                <label className="label font-bold">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a onClick={handleForget} className="link link-hover font-bold">Forgot password?</a></div>
                                <div>
                                    <button onClick={handlegoogleLogin} className='btn border border-blue-500 w-full hover:bg-primary hover:text-white'>Continue with Google</button>
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