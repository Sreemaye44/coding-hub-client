import React, { useEffect } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser]=useState(null);
    const[loading, setLoading]=useState(true);
    const GoogleProviderLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const GithubProviderLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser=(email,password)=>{
        setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
          //console.log('user inside state change', currentUser);
              setUser(currentUser);
              setLoading(false);
        });
        return()=>unSubscribe();
  },[])
 
    const authInfo=
    {
        user,
        GoogleProviderLogin,
        GithubProviderLogin,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;