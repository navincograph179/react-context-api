import React from 'react';
import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';


const App = () => {
  return (
  <UserContextProvider>
    <h1>Context API</h1>
    <Login />
    <Profile />
  </UserContextProvider>
  )
}

export default App