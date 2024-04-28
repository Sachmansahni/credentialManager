import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const Encrypted = () => {
  const [username, setUsername] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [password, setPassword] = useState('');
  const [credentials, setCredentials] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Hash the password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, 10); // Using a salt factor of 10

    // Create a new credential object with both hashed and unhashed passwords
    const newCredential = {
      website: websiteName,
      password: hashedPassword,
      unhashedPassword: password, // Store the unhashed password alongside the hashed one
    };

    // Update credentials state by adding the new credential
    const updatedCredentials = [...credentials, newCredential];
    setCredentials(updatedCredentials);

    // Store the updated credentials array in localStorage under the username
    localStorage.setItem(username, JSON.stringify(updatedCredentials));

    // Reset form fields
    setWebsiteName('');
    setPassword('');

    alert('Your credentials are stored securely!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Password Manager (Encrypted)
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

export default Encrypted;
