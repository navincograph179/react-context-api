import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      Profile: {user? user.username : ''}
      Password: {user? user.password : ''}
      </div>
  )
}

export default Profile