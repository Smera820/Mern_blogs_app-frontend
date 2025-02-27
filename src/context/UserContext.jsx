import React from 'react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {URL} from '../url'

export const UserContext=createContext({})


export default function UserContextProvider({ children }) {
    const [user,setUser]= useState(null)
    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try{
            const res = await axios.get(URL + "/api/auth/refresh", { withCredentials: true });
            setUser(res.data)
        }
        catch(err){
            console.log("Error fetching user:",err.res?err.res.data:err.message);
            
        }
    }
    return (
        <div>
            <UserContext.Provider value={{user,setUser}}>
            {children}
            </UserContext.Provider>
        </div>
    )
}
