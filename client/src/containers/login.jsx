import React, { useEffect, useState } from "react"
import LoginInput from "../components/LoginInput"
import {motion} from 'framer-motion'
// import{CircleLoader} from "react-awesome-loaders"
// need to import logo and background images!!!!!!!!!!!!!!!!!
// import { LoginBg, logo } from "../assets/img"
import logo from "../assets/img/logo2.png";

import {HiMail} from "react-icons/hi"
import {RiLockPasswordFill} from "react-icons/ri"
import{FcGoogle} from "react-icons/fc"
import { buttonClick, fadeInOut } from "../animations"

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import {app} from "../config/firebase.config"
import { validateUserJWTToken } from "../api"
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { alertInfo, alertWarning, alertNULL } from "../context/actions/alertAction"
import { setUserDetails } from "../context/actions/userActions";


export default function login(){
    const[userEmail, setuserEmail]= useState("");
    const[userisSignUp, setuserisSignUp]= useState(false);
    const[password, setpassword]= useState("");
    const[confirm_password, setconfirm_password]= useState("");

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const navigate = useNavigate();
    const dispatch= useDispatch();

    const user=useSelector(state=>state.user);
    const alert=useSelector(state=>state.alert);


    useEffect(()=>{
        if(user){
            navigate("/" , {replace : true})
        }
    }, [user]);


    const loginUsingGoogle = async() => {
        await signInWithPopup(firebaseAuth, provider).then( userCred => {
            firebaseAuth.onAuthStateChanged((Cred) => {
                if (Cred) {
                    Cred.getIdToken().then((token) => {
                      validateUserJWTToken(token).then(data =>{
                        // console.log(data);
                        dispatch(setUserDetails(data));
                      }) ;  
                      navigate("/", {replace : true });
                        // console.log(token);
                    });
                    
                }
            });    
        });
    };

    const signUpUsingMail = async() =>{
        if (userEmail==="" || password==="" || confirm_password===""){
            // console.log("Empty fields");
            //alert
            dispatch(alertInfo("required fields shouldn't be empty"))
            setTimeout(()=>{
                dispatch(alertNULL())
              }, 3000);
        }
        else{
            if (password===confirm_password){
                setuserEmail("")
                setpassword("")
                setconfirm_password("")
                await createUserWithEmailAndPassword(firebaseAuth, userEmail, password).then(userCred =>  {
                    firebaseAuth.onAuthStateChanged((Cred) => {
                        if (Cred) {
                            Cred.getIdToken().then((token) => {
                              validateUserJWTToken(token).then(data =>{
                                // console.log(data);
                                dispatch(setUserDetails(data));
                              }) ;   
                              navigate("/", {replace : true });
                            });
                        }
                    });    
                })
                // console.log("equal");
            }else{
                //alert
                dispatch(alertWarning("passwords doesn't match"))
                setTimeout(()=>{
                    dispatch(alertNULL())
                  }, 3000);
            }
        }
    };

    const signInUsingMail = async() => {
        if (userEmail !== "" && password !== ""){
            await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(userCred =>{
                firebaseAuth.onAuthStateChanged((Cred) => {
                    if (Cred) {
                        Cred.getIdToken().then((token) => {
                          validateUserJWTToken(token).then(data =>{
                            // console.log(data);
                            dispatch(setUserDetails(data));
                          }) ;   
                          navigate("/", {replace : true });
                        });
                    }
                });  
            })
        }else{
            //alert
            dispatch(alertWarning("passwords doesn't match"))
            setTimeout(()=>{
                dispatch(alertNULL())
              }, 3000);
        }
    };


  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
        
        <img src="https://img.freepik.com/premium-vector/oktoberfest-2022-beer-festival-hand-drawn-doodle-elements-german-traditional-holiday-octoberfest-craft-beer-blue-white-rhombus-set-elements_550168-413.jpg?w=900" alt="picture"  className="w-full h-full object-cover absolute top-0 left-0"/>

        
        <div className="flex flex-col items-center bg-cardOverlay opacity-60 w-[40%] h-full md: w-508 h-full z-50 backdrop-blur-md p-4 px-4 py-12 gap-6">
            {/* logo-section */}
            <div className="flex items-center justify-start gap-4 w-full">
            <img src="https://img.freepik.com/premium-vector/pizza-logo-template-suitable-restaurant-cafe-logo-restaurant-food-delivery-service_279597-968.jpg?w=740" alt="logo" className=" w-10" />
                <p className="text-white font-semibold">Night Canteen Services</p>
            </div>

            {/* welcome text */}
            <p className="text-3xl font-bold text-white">Welcome Back!</p>
            <p className="text-xl text-textColor -mt-6">{userisSignUp ? "Sign Up" : "Sign In"} with the following</p>

            {/* input section */}
            <div className="flex flex-col items-center justify-center gap-6 px-4 md: px-12 py-4">
                <LoginInput
                    placeholder={"Email here"}
                    icon={<HiMail/>}
                    inputState={userEmail}
                    inputStateFunc={setuserEmail}
                    type="email"
                    isSignUp={userisSignUp}
                />
                <LoginInput
                    placeholder={"Password"}
                    icon={<RiLockPasswordFill/>}
                    inputState={password}
                    inputStateFunc={setpassword}
                    type="password"
                    isSignUp={userisSignUp}
                />

                {userisSignUp && (
                        <LoginInput
                            placeholder={"Confirm Password here"}
                            icon={<RiLockPasswordFill/>}
                            inputState={confirm_password}
                            inputStateFunc={setconfirm_password}
                            type="password"
                            isSignUp={userisSignUp}
                        />
                    )
                }


                {
                    !userisSignUp ? <p>Doesn't have an account :   
                        <motion.button {...buttonClick} className="text-red-400 font-semibold underline cursor-pointer bg-transparent"
                            onClick={()=>{setuserisSignUp(true)}}
                        >Create One</motion.button></p> : 
                        <p>Already have an account :   
                        <motion.button {...buttonClick} className="text-red-400 font-semibold underline cursor-pointer bg-transparent"
                            onClick={()=>{setuserisSignUp(false)}}
                        >Sign in</motion.button></p>
                }



                {/* button section */}
                {userisSignUp ? 
                    <motion.button 
                    {...fadeInOut} 
                    className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl hover:bg-red-500 transition-all duration-150"
                    onClick={signUpUsingMail}
                    >SIGN UP</motion.button>  :
                    <motion.button 
                    {...fadeInOut} 
                    onClick={signInUsingMail}
                    className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl hover:bg-red-500 transition-all duration-150"
                    >SIGN IN</motion.button>
                }

            </div>

            <div className="flex items-center justify-between gap-16">
                <div className="w-24 h-[1px] rounded-md bg-white"></div>
                <p className="text-white">or</p>
                <div className="w-24 h-[1px] rounded-md bg-white"></div>
            </div>

            {
                userisSignUp ? <motion.div {...buttonClick} className="flex item-center, justify-center px-20 py-2 bg-white-500 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
                onClick={loginUsingGoogle}>
                <FcGoogle/>
                <p className="capitalize text-base text-white">Sign up with google</p>
                </motion.div>  :   

                <motion.div {...buttonClick} className="flex item-center, justify-center px-20 py-2 bg-white-500 backdrop-blur-md cursor-pointer rounded-3xl gap-4"
                onClick={loginUsingGoogle}  >
                <FcGoogle/>
                <p className="capitalize text-base text-white">Sign In with google</p>
                </motion.div>
                
            }
        </div>
    </div>
  )
}
