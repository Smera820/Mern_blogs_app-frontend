import React from 'react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import {URL} from '../url'

export const UserContext=createContext({})


export default function UserContextProvider({childern}) {
    const [user,setUser]= useState(null)
    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try{
            const res= await axios.get(URL+"/api/auth/refech",{withCredentials:true})
            setUser(res.data)
        }
        catch(err){
            console.log(err);
            
        }
    }
    return (
        <div>
            <UserContext.Provider value={{user,setUser}}>
                {childern}
            </UserContext.Provider>
        </div>
    )
}
