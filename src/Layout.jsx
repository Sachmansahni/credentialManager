import React from 'react'
import { Outlet } from 'react-router-dom'                        //this will make a template for you website for the components that u want to add to all the pages
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



// function Layout() {
//   return (
//     <>
//     <Header />
//     <Outlet />
//     <Footer />
//     </>
//   )
// }

// export default Layout





import { useState, useEffect } from 'react';
import Entry from './components/Entry/Entry'

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  }, []);

  return (
    <div>
      {isLoading ? (
        // Show loading indicator
        <div className='m-0 p-0'>
            <Entry/>
        </div>
      ) : (
        <>
    <Header />
    <Outlet />
    <Footer />
    </>
      )}
    </div>
  );
};

export default Layout;

