export const setuserDetails = (user) => {
    return {
        type : "SET_USER",
        user : user
    }
}

export const getuserDetails = () => {
    return {
        type : "GET_USER",
    }
}


export const setuserNull = () => {
    return {
        type : "SET_USER_NULL",
        user : null
    }
}