import React, { useState } from 'react'
import { statuses } from '../utils/styles';
import Spinner from './Spinner';
import {ImUpload} from "react-icons/im"
import { getStorage, ref, uploadBytesResumable , getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import {alertSuccess, alertDanger, alertWarning, alertInfo, alertNULL} from "../context/actions/alertAction"
import {motion} from 'framer-motion'
import { buttonClick } from '../animations';
import {MdDelete} from "react-icons/md"
// import LinearProgress from '@mui/material/LinearProgress';

import {addNewProduct, getAllProducts}  from '../api/index';
import {setAllProducts}  from '../context/actions/productActions';






const DBNewitems = () => {
  const [ItemName, setItemName]=useState("");
  const [category, setcategory]=useState(null);
  const [price, setPrice]=useState("");
  const [isLoading, setisLoading]=useState(false);
  const [progress, setProgress]=useState(null);
  const [imageDownloadURL, setimageDownloadURL]=useState(null);


  const alert=useSelector((state)=>state.alert);
  const dispatch=useDispatch();

  const uploadImage= (e)=>{
    setisLoading(true);
    const imageFile=e.target.files[0];
    // console.log(imageFile);
    const storageRef=ref(storage, `Images/${Date.now()}_${imageFile.name}`);

    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 

      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        // console.log("yha p hi fasa hua hu hay, kisi trh nikal yha se")
      }, 

      (error) => {
        dispatch(alertDanger(`Error : ${error}`));
        setTimeout(()=>{
          dispatch(alertNULL())
        }, 3000)
      }, 

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("image is being uploaded");
          setimageDownloadURL(downloadURL);
          setisLoading(false);
          setProgress(null);
          // dispatch(alertSuccess("Image uploaded to the cloud"));
          dispatch(alertSuccess("Aagya Aagya maal aagya"));
          setTimeout(()=>{
            dispatch(alertNULL())
          }, 3000)
        });
      }
    );
  }

  const deleteImageFromFirebase=()=>{
    setisLoading(true);

    // console.log("yha se nikal gaya")

    const deleteRef=ref(storage, imageDownloadURL);

    // console.log("yha nhi nikal paaya")

    deleteObject(deleteRef).then(()=>{
        setimageDownloadURL(null);
        setisLoading(false);

        dispatch(alertSuccess("image was succesfully removed"));
        setTimeout(()=>{
          dispatch(alertNULL())
        }, 3000)
    })
  }

  const submitNewData=()=>{
    console.log("submit p click to ho rha hai")

    const data={
      product_name       : ItemName,
      product_category   : category,
      product_price      : price,
      imageURL           : imageDownloadURL,
    };

    console.log("submit p click to ho rha hai but yha p data :")
    console.log(data);
    console.log("yha v1 aaya");


    addNewProduct(data).then(res=>{

      console.log("yha v2 aaya");
      console.log(res);   
      console.log("yha ni aaya");

      dispatch(alertSuccess("New Item Added succesfully"));
      setTimeout(()=>{
        dispatch(alertNULL())
      }, 3000);

      setimageDownloadURL(null);
      setItemName("");
      setPrice("");
      setcategory(null);
    });

    getAllProducts().then(data=>{
      console.log("getallproduct wala data : ")
      console.log(data);
      dispatch(setAllProducts(data))
    })
  }

  return (
    <div className='flex flex-col items-center justify-center pt-6 px-24 w-full '>
      <div className="border border-gray-500 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
          <InputValueField 
              type="text" 
              placeholder='Items name here'
              stateFunc={setItemName}
              stateValue={ItemName}
          />
          <div className="w-full flex  items-center justify-around gap-3 flex-wrap">

            {/* mapping over the data to show on the screen */}
            {statuses && statuses?.map(data=>
                <p 
                  key={data.id} 
                  onClick={()=>setcategory(data.category)}
                  className={`px-4 py-3 rounded-md text-xl text-blue-700 font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md  ${data.category===category ?  "bg-red-500 text-white" : "bg-transparent"}`}>{data.title}</p>
              )}
          </div>
          <InputValueField 
              type="number" 
              placeholder='Items price here'
              stateFunc={setPrice}
              stateValue={price}
          />
          <div className="w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
            {isLoading ? (
              <div className='w-full h-full flex flex-col items-center justify-evenly px-24'>
                <Spinner/>{progress}

                {/* yha pe ek progress bar lagana hai 6:10 */}
                {/* <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} /> */}
              </div>
              ) : (
                <>
                  {!imageDownloadURL ? (
                    <>
                      <label >
                          <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                            <div className="flex flex-col justify-center items-center cursor-pointer">
                              <p className="font-bold text-4xl"><ImUpload/></p>
                              <p className="text-lg text-gray-700">Click Here to upload an Image</p>
                            </div>
                          </div>

                          <input 
                              type="file" 
                              name='upload-image'
                              accept="image/*"
                              onChange={uploadImage}
                              onClick={()=>{console.log("clickeddddddddddddd")}}
                              className='w-0 h-0'
                          />

                      </label>
                    </>
                    ) : (
                    <>
                        <div className="realtive w-full h-full overflow-hidden rounded-md">
                          <motion.img
                            whileHover={{scale : 1.15}}
                            src={imageDownloadURL}
                            className='w-full h-full object-none'
                          />

                          <motion.button
                            {...buttonClick}
                            type='button'
                            className='absolute top-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-allease-in-out'
                            onClick={()=>deleteImageFromFirebase(imageDownloadURL)}
                          ><MdDelete className='text-white'/></motion.button>
                        </div>
                    </>
                  ) }
                </>
              )
            }
          </div>

          <motion.button onClick={submitNewData}{...buttonClick} className="w-9/12 py-2 rounded-md bg-red-400 text-primary hover:bg-red-600 cursor-pointer"> 
            Save
          </motion.button>


      </div>
    </div>
  )
}


export const InputValueField=({type, placeholder, stateValue, stateFunc})=>{
  return (
    <>
        <input 
          type={type} 
          placeholder={placeholder}
          className='w-full px-4 py-3 bg-slate-100 shadow-lg outline-none rounded-md border border-gray-200 focus:border-red-500'
          value={stateValue}
          onChange={(e)=>stateFunc(e.target.value)}
        />
      </>
  );
      
}
export default DBNewitems;

