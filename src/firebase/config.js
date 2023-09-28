import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoFU_KkaPAuy4_YrdM0bfVEhNW3HtrevE",
    authDomain: "flixdin-app.firebaseapp.com",
    databaseURL: "https://flixdin-app-default-rtdb.firebaseio.com",
    projectId: "flixdin-app",
    storageBucket: "flixdin-app.appspot.com",
    messagingSenderId: "790969471633",
    appId: "1:790969471633:web:d8bbc1a34fe78c13e0a530",
    measurementId: "G-T7RWXYGY15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
