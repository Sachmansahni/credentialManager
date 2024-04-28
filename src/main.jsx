import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import {createRoutesFromElements} from 'react-router-dom'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Password from './components/Password/Password.jsx'
import Encrypted from './components/Encrypted/Encrypted.jsx'
import Unencrypted from './components/Unencrypted/Unencrypted.jsx'
import Login from './components/Login/Login.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contactus",
//         element:<Contact  />
//       }
//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='Github' element={<Github />} />
      <Route path='pass_generator' element={<Password />} />
      <Route path='encrypted' element={<Encrypted/>} />
      <Route path='unencrypted' element={<Unencrypted/>} />
      <Route path='login' element={<Login />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
