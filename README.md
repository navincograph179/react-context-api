# React + Vite + Context API Example
# This example demonstrates how to use the React Context API in a React application created with Vite. The application will have a login form, and the user's information will be passed between components using the Context API.

Steps:
1.Start
2.Create a React App
3.Create a Context
4.Provide the Context
5.Consume the Context in Child Components
6.End


# A. Start
Create a new React app using Vite.

# B. Create a React App
Open your terminal and run the following command to create a new React app using Vite:

npm create vite@latest

Follow the instructions to set up your project.

# C. Create a Context Folder
In the src directory, create a folder called context. Inside this folder, create two files: UserContext.js and UserContextProvider.jsx.

  1. UserContext.js

  import React from "react";

  const UserContext = React.createContext();

  export default UserContext;


This file sets up the context using React's createContext() method. It will allow us to share data between components.

  2. UserContextProvider.jsx

import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;


This component wraps around any components that need access to the UserContext. The useState hook manages the user data, and the UserContext.Provider provides this data to its children.

# D. Provide the Context
In your App.jsx, wrap your components with UserContextProvider so that they can access the context data.

 App.jsx
import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  return (
    <UserContextProvider>
      <h1>Context API Example</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;

Here, the Login and Profile components will be able to consume the data provided by UserContextProvider.

# E. Consume the Context in Child Components
1. Login.jsx
This component allows the user to log in and save their credentials to the context.

import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter username"
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password"
        />
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;

This component captures the username and password input and saves them to the context when the user submits the form.

2. Profile.jsx
This component displays the user information stored in the context.


import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user ? user.username : 'No user logged in'}</p>
      <p>Password: {user ? user.password : 'No password set'}</p>
    </div>
  );
};

export default Profile;

Here, the Profile component accesses the user object from the context and displays the username and password.

# F. End
When the user inputs their credentials in the Login component and clicks submit, the data is saved in the context. The Profile component then consumes this data and displays it. This example demonstrates how to share data between components using the React Context API without prop drilling.