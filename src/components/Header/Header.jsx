// import React from 'react'
// import {Link,NavLink} from 'react-router-dom'

// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             src="../../../smalllogo3.png"
//                             className="mr-3 h-12"
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Get started
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/contactus"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact us
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/Github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Your Credentials 
//                                 </NavLink>
//                             </li>
                            
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }



import React from 'react';
import { Link } from 'react-router-dom';             //this is a routing library for react applications ,allows u handle the navigation and routing in a react application 

export default function Header() {
    return (
        <header className="shadow sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white border">
                <div className="container-fluid">             
                {/* takes full width */}
                    <Link to="/" className="navbar-brand">
                        <img
                            src="../../../smalllogo3.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="navbar-nav ml-auto">
                        {/* navbar-nav for styling an unordered list */}
                        <Link to="/login" className="nav-link text-gray-800">
                            {/* nav-link ->style anchor tags */}
                            Log in
                        </Link>
                        <Link to="#" className="nav-link text-white bg-orange-700">
                            Get started
                        </Link>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-gray-800">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-gray-800">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link text-gray-800">
                                Contact us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Github" className="nav-link text-gray-800">
                                Your Credentials
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
