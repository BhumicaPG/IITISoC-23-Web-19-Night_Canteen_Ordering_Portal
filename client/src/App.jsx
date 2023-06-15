import "./index.css"
import { fadeInOut } from "./animations"
import {Route, Routes} from 'react-router-dom'
import{motion} from "framer-motion"

import Login from "./containers/login"
import Main from "./containers/Main"
import {validateUserJWTToken} from './api'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {app} from "./config/firebase.config"
import { getAuth} from "firebase/auth"
import { setUserDetails } from "./context/actions/userActions"
import {CirclePopLoader} from "react-loaders-kit"
import { Alert } from "./components/index"




export default function App() {
  const firebaseAuth = getAuth(app);
  
  const [IsLoading , setIsLoading]=useState(false);
  const alert=useSelector(state=>state.alert)

  const dispatch= useDispatch();

  useEffect(()=>{
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((Cred) => {
      if (Cred) {
          Cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) =>{
              // console.log("data");
              // console.log(data);
              dispatch(setUserDetails(data));
            });
          });
          console.log("Cred");
          console.log(Cred);
      }
      setInterval(()=>{
        setIsLoading(false);
      }, 3000);
    });
  }, [])

  return (
    <div className='w-screen min-h-screen  h-auto flex flex-col items-center justify-center'>
      {IsLoading && (
        <motion.div {...fadeInOut}className="fixed  z-50 inset-0 bg-green-100  backdrop-blur-md flex items-center justify-center w-full">
          Loading.....
        </motion.div>
        // <motion.div><CirclePopLoader /></motion.div>
      )}
      <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
      </Routes>

      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}

    </div>
    
  )
}
