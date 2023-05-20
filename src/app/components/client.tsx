"use client";

import { useState, createContext, Children, useContext } from "react";
import Link from "next/link";
const Context= createContext({user:{}})

export const ContextProvider=({children})=>{

const[user,setUser]=useState({});
return <Context.Provider value={{

user,setUser,

}}
>
    {children}
</Context.Provider>

}

export const LogoutButton=()=>{

    const logoutHandler=()=>{

alert('log out');
    };

    const {user}=useContext(Context);

return user.id?(<button onClick={logoutHandler}>Log out
    </button>):(
        <Link href={"/login"}>Login</Link>
    );

};

export const TodoButton=({id,completed})=>{

    const deleteHandler=(id)=>{
alert(`Deleting,${id}` );

    }

    return (<>
    
    <input type="checkbox" checked={completed}/>
    <button onClick={()=>deleteHandler(id)}>Delete</button>
    
    </>);
};