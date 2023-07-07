// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "flixdin-app.appspot.com",
    authDomain: "flixdin-app.appspot.com",
    projectId: "flixdin-app.appspot.com",
    databaseURL: "flixdin-app.appspot.com",
    storageBucket: "flixdin-app.appspot.com",
    messagingSenderId: "flixdin-app.appspot.com",
    appId: "flixdin-app.appspot.com",
    measurementId: "flixdin-app.appspot.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}
