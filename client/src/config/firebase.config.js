import {getApp, getApps, initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"



// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyD5XQf0D5uuX-gt8Dl67ttchkmcTBZhzG4",
//   authDomain: "night-canteen-app.firebaseapp.com",
//   projectId: "night-canteen-app",
//   storageBucket: "night-canteen-app.appspot.com",
//   messagingSenderId: "816462432836",
//   appId: "1:816462432836:web:611611c23b7d26f502ca11",
//   measurementId: "G-BXL8JGKHPH"
// };

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


