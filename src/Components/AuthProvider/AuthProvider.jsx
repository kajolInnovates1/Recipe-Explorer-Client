import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, } from 'firebase/auth';
import { auth } from '../Firebase/init.firebase';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // console.log('User logged in:', currentUser);
            } else {
                setUser(null);
                // console.log('User logged out');
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);
    const info = {
        createUser,

        user,
        setUser,
        signout

    }


    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;