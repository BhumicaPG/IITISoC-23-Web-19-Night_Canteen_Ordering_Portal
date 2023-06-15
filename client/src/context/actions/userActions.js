export const setUserDetails=(user)=>{
    return{
        type:"SET_USER",
        user: user
    }
}

export const getUserDetails=(user)=>{
    return{
        type:"GET_USER",
        // user: user
    }
}