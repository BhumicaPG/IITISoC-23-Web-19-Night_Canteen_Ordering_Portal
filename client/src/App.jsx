import "./index.css"
import {Route, Routes} from 'react-router-dom'
//import {Main, Login} from "./containers"
import { motion } from "framer-motion";
import Login from "./containers/login"
import Main from "./containers/Main"
import { app } from "./config/firebase.config";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {useDispatch} from "react-redux";
import { validateUserJWTToken} from "./api";
import { setuserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animations";

export default function App(){
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading]= useState(false)
  const dispatch = useDispatch();

  useEffect(() =>{
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((Cred) => {
      if (Cred) {
          Cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then(data =>{
              console.log(data)
              dispatch(setuserDetails(data))
            }) ;  
          });
          console.log(Cred);
      }
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
  });  
  }, []);

  return (
    <div className='w-screen min-h-screen  h-auto flex flex-col items-center justify-center'>
      {isLoading && (
        <motion.div 
        {...fadeInOut} 
        className ="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full">
        loading....
        </motion.div>
      )}
      <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
  );
}

