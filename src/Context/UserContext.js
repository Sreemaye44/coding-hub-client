import React, { useEffect } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser]=useState(null);
    const GoogleProviderLogin=(provider)=>{
        return signInWithPopup(auth, provider);
    }
    const GithubProviderLogin=(provider)=>{
        return signInWithPopup(auth, provider);
    }
    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
          //console.log('user inside state change', currentUser);
              setUser(currentUser);
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
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;