import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKbN4iv1ffpDQMb_wT9JmclUWr5ukJi4k",
  authDomain: "cart-1e1da.firebaseapp.com",
  projectId: "cart-1e1da",
  storageBucket: "cart-1e1da.appspot.com",
  messagingSenderId: "609271369706",
  appId: "1:609271369706:web:8f9cd0b89836a8fdc26c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);