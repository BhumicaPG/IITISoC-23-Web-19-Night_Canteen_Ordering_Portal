import { useState } from "react";
import{motion} from "framer-motion"
import { fadeInOut } from "../animations";


export default function LoginInput({placeholder, icon, inputState, inputStateFunc, type, isSignUp}){
    const [isFocus, setIsFocus]=useState(false);

    return(
        <motion.div 
            {...fadeInOut}
            className={`flex items-center justify-center gap-4 bg-white-500 backdrop-blur-md rounded-md w-300 px-4 py-2
            ${isFocus ? "shadow-md shadow-red-400" : "shadow-none"}
        `}>
            {icon}
            <input 
                type={type} 
                placeholder={placeholder} 
                className="w-full h-full bg-transparent text-black text-lg font-semibold  border-none outline-none"
                value={inputState}

                // to save the state into our database
                onChange={(e)=>inputStateFunc(e.target.value)}
                onFocus={()=>setIsFocus(true)}
                onBlur={()=>setIsFocus(false)}


            />
        </motion.div >

    );
}