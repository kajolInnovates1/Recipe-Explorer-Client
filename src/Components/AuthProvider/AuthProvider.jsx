import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import { auth } from '../Firebase/init.firebase';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signout = () => {
        return signOut(auth);
    }

    const info = {
        createUser,
        signInUser,
        user,
        setUser,
        signout

    }
    return (
        <AuthContext value={info}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;