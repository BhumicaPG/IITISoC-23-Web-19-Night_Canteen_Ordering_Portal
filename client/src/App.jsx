import "./index.css"
import { fadeInOut } from "./animations"
import {Route, Routes} from 'react-router-dom'
//import {Main, Login} from "./containers"
import { motion } from "framer-motion";
import Login from "./containers/login"
import Main from "./containers/Main"
import MenuPage from "./components/MenuPage"
import { app } from "./config/firebase.config";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { getAllCartItems, validateUserJWTToken} from "./api";
import { setUserDetails } from "./context/actions/userActions";
// import { fadeInOut } from "./animations";

// import { CircleLoader } from "re";
import { PropagateLoader, HashLoader } from "react-spinners";

import { useDispatch, useSelector } from "react-redux";
// import {CirclePopLoader} from "react-loaders-kit"
import { Alert } from "./components/index"
import DashBoard from "./containers/DashBoard"
import { setCartItems } from "./context/actions/cartAction";
import CheckOutSuccess from "./components/CheckOutSuccess";


// export default function App(){
//   const firebaseAuth = getAuth(app);
//   const [isLoading, setIsLoading]= useState(false)
//   const dispatch = useDispatch();

//   useEffect(() =>{
//     setIsLoading(true);
//     firebaseAuth.onAuthStateChanged((Cred) => {
//       if (Cred) {
//           Cred.getIdToken().then((token) => {
//             validateUserJWTToken(token).then(data =>{
//               console.log(data)
//               dispatch(setuserDetails(data))
//             }) ;  
//           });
//           console.log(Cred);
//       }
//       setInterval(() => {
//         setIsLoading(false);
//       }, 3000);
//   });  
//   }, []);

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
              if (data) {
                getAllCartItems(data.user_id).then((items) => {
                  console.log("items");
                  console.log(items);
                  dispatch(setCartItems(items));
                });
              };
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
        <motion.div 
        {...fadeInOut} 
        className ="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full">
        {/* <PropagateLoader color="#f2f2f2" /> */}
        <HashLoader color="#cf4141" />
        </motion.div>
        
      )}
      <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout-success" element={<CheckOutSuccess />} />
      </Routes>

      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}

    </div>
    
  );
}
