import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
  

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
    //
  }
  return (
    <div>
      <h2>LOGIN</h2>
      <form action="">
        <label htmlFor="">USERNAME</label>
        <input 
        type="text" 
        value={username} 
        placeholder='username'
        onChange={(e)=> setUsername(e.target.value)}
        />
        <label htmlFor="">PASSWORD</label>
        <input 
        type="password" 
        value={password} 
        placeholder='password'
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
        >Submit </button>
      </form>
    </div>
  )
}

export default Login