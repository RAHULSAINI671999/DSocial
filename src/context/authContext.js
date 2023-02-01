import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        
       JSON.parse(localStorage.getItem("user")) || null
    
    );

    const login = () =>{
       // to do 
       setCurrentUser({id:1,name:"Rahul Saini", 
       profilePic:"https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80"
    })
    }

    useEffect(() => {
    localStorage.setItem("user",JSON.stringify(currentUser))
    }, [currentUser])


    return(
        <AuthContext.Provider value={{currentUser , login}}>
        {children}
        </AuthContext.Provider>
    )

};