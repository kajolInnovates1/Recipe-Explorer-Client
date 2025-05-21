import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../Components/Firebase/init.firebase';
import Swal from 'sweetalert2';



const Registration = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const userinfo = {
            email,
            name,
            photo,

        };

        // password check
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            return;
        }

        if (!/[a-z]/.test(password)) {
            setError('Password must contain at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }


        setError('');

        createUser(email, password).then(result => {
            // console.log(result);
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo

            }).catch(error => {
                alert(error);
            })
            setUser(result.user);

            fetch('http://localhost:8080/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userinfo)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: "Registration Succesfull!",
                            icon: "success",
                            draggable: true
                        });

                    }

                });

        }).catch(error => {
            alert(error);

        });



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
                fetch('http://localhost:8080/user', {
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
            })
            .catch(error => {
                alert(error);
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
                                <label className="label font-bold">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Name" />
                                <label className="label font-bold">Photo URL</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                                <label className="label font-bold">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label font-bold">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div className='flex items-center gap-1 text-sm'>
                                    <input className='size-4' type="checkbox" />
                                    <label className='font-bold'>Accept Terms and Conditions</label>
                                </div>
                                <div>
                                    <button onClick={handlegoogleLogin} className='btn border border-blue-500 w-full hover:bg-primary hover:text-white'>Continue with Google</button>
                                </div>
                                <button className="btn bg-primary text-white mt-4 w-full">Sign Up</button>
                                {
                                    error && <p className='text-red-400'>{error}</p>
                                }
                                <p className='text-xl'><span className='font-light'>Allready have Account? </span><Link className='text-blue-500 font-bold hover:underline' to='/login'>Sign In</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;