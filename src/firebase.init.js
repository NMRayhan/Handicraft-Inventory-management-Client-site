import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHIR9aKIInfh5mTRM_QWoV84u_N2Funwk",
  authDomain: "handicraft-inventory-manage.firebaseapp.com",
  projectId: "handicraft-inventory-manage",
  storageBucket: "handicraft-inventory-manage.appspot.com",
  messagingSenderId: "428666418573",
  appId: "1:428666418573:web:f55a336df74986c940b9c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
