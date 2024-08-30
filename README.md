# React + Vite
# Context API

a. Start
b. Create a React app
c. Create a context
d. Provide the context
e. consume the text in child
f. End


#A. START

#B. Terminal 
npm create vite@latest

#C. CREATE a folder of context in ./src
  1. UserContext.js
  2. UserContextProvider.jsx

#1. UserContext.js
 import React from "react";

const UserContext = React.createContext();

export default UserContext;

// these all are default code for react Context.


#2. UserContextProvider.jsx

import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
