import {getApp, getApps, initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"




const firebaseConfig = {
  apiKey: "AIzaSyBU75JavgaRSfAx-98jOilFod8TUf_aeX4",
  authDomain: "night-canteen-ordering-portal.firebaseapp.com",
  projectId: "night-canteen-ordering-portal",
  storageBucket: "night-canteen-ordering-portal.appspot.com",
  messagingSenderId: "625506389850",
  appId: "1:625506389850:web:68fb234a097ab57352ad63"
};


const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID, 
//     appId: process.env.REACT_APP_FIREBASE_APP_ID, 
//     // measurementId: process.env., 
//   };

//   const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);

//   const storage=getStorage(app);

//   export{app, storage};

