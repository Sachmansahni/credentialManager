// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom'


// function Github() {
//   // const {followers}=useParams();
//   const [data,setData]=useState([])

//   useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response =>response.json())
//     .then(data=>{
//       console.log(data);
//       setData(data)
//     })
//   },[])


//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
//         Github followers: {data.followers};
//         <img src={data.avatar_url} alt='Git Picture' width={300}/>
//     </div>
//   )
// }

// export default Github
import React from 'react';

const CredentialsList = ({ credentials }) => {
  // Check if credentialsArray is undefined or null
  
  if (!credentials) {
    return null; // Render nothing if credentialsArray is undefined or null
  }

  return (
    <div>
      <h2>Credentials List</h2>
      <ul>
        {/* Check if credentialsArray is an array and not empty */}
        {Array.isArray(credentials) && credentials.length > 0 ? (
          credentials.map((credential, index) => (
            <li key={index}>
              <strong>Website:</strong> {credential.website}, {' '}
              <strong>Password:</strong> {credential.password}
            </li>
          ))
        ) : (
          <li>No credentials found</li>
        )}
      </ul>
    </div>
  );
};

export default CredentialsList;
