// import React, { useState } from 'react';
// import Github from '../Github/Github';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [foundUserCredentials, setFoundUserCredentials] = useState(null);
//     const [userFound, setUserFound] = useState(false);

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         // Check if the username exists in localStorage
//         const storedUserData = localStorage.getItem(username);

//         if (storedUserData) {
//             // Parse the stored data from localStorage
//             const userData = JSON.parse(storedUserData);

//             // Display found user credentials
//             if (userData && userData.length > 0) {
//                 setFoundUserCredentials(userData);
//                 setUserFound(true); // Set userFound to true to hide the login form
//             } else {
//                 setUserFound(false); // Set userFound to false if no credentials found
//             }
//         } else {
//             alert("User not found");
//         }
//     };

//     return (
//         <div>
//             {!userFound ? (
//                 <form onSubmit={handleFormSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//             ) : (
//                 <div>
//                     <h3>Stored Credentials for {username}:</h3>
//                     <ul>
//                         {foundUserCredentials.map((credential, index) => (
//                             <li key={index}>
//                                 Website: {credential.website}, Password: {credential.password}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Login;



// import React, { useState } from 'react';
// import Github from '../Github/Github';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [foundUserCredentials, setFoundUserCredentials] = useState(null);
//     const [userFound, setUserFound] = useState(false);

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         // Check if the username exists in localStorage
//         const storedUserData = localStorage.getItem(username);

//         if (storedUserData) {
//             // Parse the stored data from localStorage
//             const userData = JSON.parse(storedUserData);

//             // Display found user credentials
//             if (userData && userData.length > 0) {
//                 setFoundUserCredentials(userData);
//                 setUserFound(true); // Set userFound to true to hide the login form
//             } else {
//                 setUserFound(false); // Set userFound to false if no credentials found
//             }
//         } else {
//             alert("User not found");
//         }
//     };

//     return (
//         <div>
//             {!userFound ? (
//                 <form onSubmit={handleFormSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Login</button>
//                 </form>
//             ) : (
//                 <Github credentials={foundUserCredentials} />
//             )}
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import Github from '../Github/Github';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [foundUserCredentials, setFoundUserCredentials] = useState(null);
    const [userFound, setUserFound] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Check if the username exists in localStorage
        const storedUserData = localStorage.getItem(username);

        if (storedUserData) {
            // Parse the stored data from localStorage
            const userData = JSON.parse(storedUserData);

            // Filter user credentials to include only those with null hashed passwords
            const filteredCredentials = userData.filter(
                (credential) => credential.hashedPassword === null
            );

            // Display found user credentials
            if (filteredCredentials.length > 0) {
                setFoundUserCredentials(filteredCredentials);
                setUserFound(true); // Set userFound to true to hide the login form
            } else {
                setUserFound(false); // Set userFound to false if no credentials found
            }
        } else {
            alert("User not found");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5 p-10 shadow">
                <div className="col-md-6 shadow p-4" >

                    <h1>Login</h1>
                    {!userFound ? (
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    ) : (
                        <Github credentials={foundUserCredentials} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
