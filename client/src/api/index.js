import axios from "axios";

// export const baseURL = "http://127.0.0.1:5001/night-canteen-ordering-portal/us-central1/app"


export const baseURL = "http://127.0.0.1:5001/night-canteen-ordering-portal/us-central1/app"

export const validateUserJWTToken = async (token) => {
    try{
        const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
            headers: {Authorization : "Bearer " + token},
    });
        console.log("result data :" , res.data)
        console.log("this data is returned");
        return res.data.data
    }
    catch(err) {
        console.log("null is passed due to here");
        return null;
    }
};



//add new item

export const addNewProduct=async(data)=>{
    try{
        const res= await axios.post(`${baseURL}/api/products/create`, {...data});
        // console.log("yha se data.data jaa rha")
        return res.data.data;
    }
    catch(err){
        return null;
    }
};

//get all the products
export const getAllProducts=async()=>{
    try{
        const res= await axios.get(`${baseURL}/api/products/all`);
        console.log("yha se data.data jaa rha")
        console.log(res.data.data);
        return res.data.data;
    }
    catch(err){
        return null;
    }
};

// delete a product
export const deleteAProduct = async (productId) => {
    console.log("delete me entry li")
    try {
        // console.log("delete kr try ke ander gye")
      const res = await axios.delete(`${baseURL}/api/products/delete/${productId}`
      );
      
      console.log("yha se data delete ho rha")
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
        console.log("error aaya hai delete me")
      return null;
    }
  };
  
//   export const getAllUsers = async () => {
//     try {
//       const res = await axios.get(`${baseURL}/api/users/all`);
//       return res.data.data;
//     } catch (err) {
//       return null;
//     }
//   };