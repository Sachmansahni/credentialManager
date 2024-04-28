// import React ,{useState} from 'react'

// const Unencrypted=()=>{
//     const[websiteName ,setWebsiteName]=useState('');
//     const[password,setPassword]=useState('');

//     const handleFormSubmit=(event)=>{
//         event.preventDefault;

//         localStorage.setItem(websiteName,password);

//         setWebsiteName('');
//         setPassword('');

//         alert("Your credentials are stored successfully!");
//     }

//     return(
//         <div>
//             <h2>Password Manager</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <div>
//                     <label htmlFor="websiteName">Website Name:</label>
//                     <input 
//                     type="text"
//                     id="websiteName"
//                     value={websiteName}
//                     onChange={(e)=>setWebsiteName(e.target.value)} 
//                     required
//                     />
//                 </div>
//                 <div>
//                 <label htmlFor="password">Password:</label>
//                     <input 
//                     type="passsword"
//                     id="password"
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)} 
//                     required
//                     />
//                 </div>
//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     )
// }


// export default Unencrypted



// import React, { useState } from 'react';

// const Unencrypted = () => {
//   const [websiteName, setWebsiteName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     localStorage.setItem(websiteName, password);

//     setWebsiteName('');
//     setPassword('');

//     alert('Your credentials are stored successfully!');
//   };

//   return (
//     <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
//       <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//         <div className="mt-8 overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//               <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                 Password Manager
//               </h1>
//               <form onSubmit={handleFormSubmit} className="mt-4">
//                 <div className="flex flex-col mb-4">
//                   <label htmlFor="websiteName" className="text-gray-600">Website Name:</label>
//                   <input
//                     type="text"
//                     id="websiteName"
//                     value={websiteName}
//                     onChange={(e) => setWebsiteName(e.target.value)}
//                     className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label htmlFor="password" className="text-gray-600">Password:</label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
//                 >
//                   Save
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Unencrypted;



// import React, { useState, useEffect } from 'react';

// const Unencrypted = () => {
//   const [username, setUsername] = useState('');
//   const [websiteName, setWebsiteName] = useState('');
//   const [password, setPassword] = useState('');
//   const [credentials, setCredentials] = useState([]);

//   useEffect(() => {
//     // Load existing credentials for the current user from localStorage
//     const storedCredentials = localStorage.getItem(username);
//     if (storedCredentials) {
//       setCredentials(JSON.parse(storedCredentials));
//     }
//   }, [username]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Create a new credential object
//     const newCredential = { website: websiteName, password: password };

//     // Update credentials state by adding the new credential
//     const updatedCredentials = [...credentials, newCredential];
//     setCredentials(updatedCredentials);

//     // Store the updated credentials array in localStorage under the username
//     localStorage.setItem(username, JSON.stringify(updatedCredentials));

//     // Reset form fields
//     setWebsiteName('');
//     setPassword('');

//     alert('Your credentials are stored successfully!');
//   };

//   return (
//     <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
//       <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//         <div className="mt-8 overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//               <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                 Password Manager
//               </h1>
//               <form onSubmit={handleFormSubmit} className="mt-4">
//                 <div className="flex flex-col mb-4">
//                   <label htmlFor="username" className="text-gray-600">
//                     Username:
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label htmlFor="websiteName" className="text-gray-600">
//                     Website Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="websiteName"
//                     value={websiteName}
//                     onChange={(e) => setWebsiteName(e.target.value)}
//                     className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label htmlFor="password" className="text-gray-600">
//                     Password:
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
//                 >
//                   Save
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Unencrypted;


// import React, { useState, useEffect } from 'react';

// const Unencrypted = () => {
//   const [username, setUsername] = useState('');
//   const [websiteName, setWebsiteName] = useState('');
//   const [password, setPassword] = useState('');
//   const [credentials, setCredentials] = useState([]);

//   useEffect(() => {
//     // Load existing credentials for the current user from localStorage
//     const storedCredentials = localStorage.getItem(username);
//     if (storedCredentials) {
//       setCredentials(JSON.parse(storedCredentials));
//     }
//   }, [username]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Create a new credential object
//     const newCredential = { website: websiteName, password: password };

//     // Update credentials state by adding the new credential
//     const updatedCredentials = [...credentials, newCredential];
//     setCredentials(updatedCredentials);

//     // Store the updated credentials array in localStorage under the username
//     localStorage.setItem(username, JSON.stringify(updatedCredentials));

//     // Reset form fields
//     setWebsiteName('');
//     setPassword('');

//     alert('Your credentials are stored successfully!');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
//           Password Manager
//         </h1>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="text-gray-600">
//               Username:
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="websiteName" className="text-gray-600">
//               Website Name:
//             </label>
//             <input
//               type="text"
//               id="websiteName"
//               value={websiteName}
//               onChange={(e) => setWebsiteName(e.target.value)}
//               className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="text-gray-600">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Unencrypted;





import React, { useState, useEffect } from 'react';

const Unencrypted = () => {
  const [username, setUsername] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [password, setPassword] = useState('');
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    // Load existing credentials for the current user from localStorage
    const storedCredentials = localStorage.getItem(username);
    if (storedCredentials) {
      setCredentials(JSON.parse(storedCredentials));
    }
  }, [username]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new credential object with the unhashed password
    const newCredential = { website: websiteName, password: password, hashedPassword: null };

    // Update credentials state by adding the new credential
    const updatedCredentials = [...credentials, newCredential];
    setCredentials(updatedCredentials);

    // Store the updated credentials array in localStorage under the username
    localStorage.setItem(username, JSON.stringify(updatedCredentials));

    // Reset form fields
    setWebsiteName('');
    setPassword('');

    alert('Your credentials are stored successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Password Manager
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="websiteName" className="text-gray-600">
              Website Name:
            </label>
            <input
              type="text"
              id="websiteName"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-200 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Unencrypted;
