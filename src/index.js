import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './components/Auth.jsx';
import LoginForm from './components/Login.jsx';
import RegisterForm from './components/Register.jsx';
import Phonenoform from './components/Phoneno.jsx';
import Numberverificationform from './components/Numberverification.jsx'
import Domainselectionform from './components/Selectdomain.jsx'
import Skillselectionform from './components/Otherskills';
import TermsForm from './components/T&c';
import Birthdayform from './components/Birthday';
import Thanks from './components/Thanks';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <LoginForm />
      },
      {
        path: "register",
        element: <RegisterForm />
      },
      {
        path: "phone",
        element: <Phonenoform />
      },
      {
        path: "verification",
        element: <Numberverificationform />
      },
      {
        path: "domain",
        element: <Domainselectionform />
      },
      {
        path: "terms",
        element: <TermsForm />
      },
      {
        path: "skills",
        element: <Skillselectionform />
      },
      {
        path: "birthday",
        element: <Birthdayform />
      }
    ]
  },
  {
    path: "/auth/thanks",
    element: <Thanks />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
