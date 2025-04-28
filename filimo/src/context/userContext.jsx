import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const userContext = createContext();

export const UserProvider = ({children})=>{
    
    const [myListArray,setMyListArray] = useState([])
    const[user,setUser] = useState()

    useEffect( ()=>{
        const storedUser = localStorage.getItem("user") /* localStorage only returns string so we parse in into js object */
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
        
    },[])
    
    const logIn = (validUser, validPass, mobile)=>{
        const fakeUser = {
            validUser , validPass ,mobile, loginTime: new Date().toISOString()
        }
        localStorage.setItem("user", JSON.stringify(fakeUser))
        setUser(fakeUser)
    }

    const logOut = () =>{
        localStorage.removeItem("user")
        setUser(null)
    }

    const isLoggedIn = !!user;
   /*  The double bang (!!) is a common JavaScript trick to convert any value to a strict boolean.
    It turns anything truthy into true, and anything falsy into false. */

    const handleMyListArray = (movie)=>{
        setMyListArray(prev => [...prev, movie]);
    }
    
    return(
        <userContext.Provider value={{user, isLoggedIn, logIn, logOut, myListArray, handleMyListArray}}>
            {children}
        </userContext.Provider>
    )
}