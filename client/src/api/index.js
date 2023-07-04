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
export const deleteAProduct = async (product_id) => {
    console.log("delete me entry li")
    try {
        // console.log("delete ke try ke ander gye")
      const res = await axios.delete(`${baseURL}/api/products/delete/${product_id}`
      );
      
      console.log("yha se data delete ho rha")
      console.log(res.data.data);
      return res.data.data;
    } catch (err) {
        console.log("error aaya hai delete me")
      return null;
    }
  };
  

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/users/all`);
    return res.data.data;
  } catch (err) {
    return null;
  }
};

// add an item to cart
// add new items to  the cart
export const addNewItemToCart = async (user_id, data) => {
    try {
      const res = await axios.post(
        `${baseURL}/api/products/addToCart/${user_id}`,
        { ...data }
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
};

export const getAllCartItems = async (user_id) => {
    try {
      const res = await axios.get(
        `${baseURL}/api/products/getCartItems/${user_id}`
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
};

// cart increment
export const increaseItemQuantity = async (user_id, product_id, type) => {
  console.log(user_id, product_id, type);
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateCart/${user_id}`,
      null,
      { params: { product_id: product_id, type: type } }
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const getAllOrder = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/orders`);
    return res.data.data;
  } catch (error) {
    return null;
  }
};

// update the order status
export const updateOrderSts = async (order_id, sts) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateOrder/${order_id}`,
      null,
      { params: { sts: sts } }
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};

