import React from 'react';
import './App.css'
import Profile from './components/Profile';
import Login from './components/Login';


const App = () => {
  return (
   <div>
    <h1>Context API</h1>
    <Login />
    <Profile />
   </div>
  )
}

export default App