"use client";

import { useState, createContext, Children, useContext, useEffect } from "react";
import Link from "next/link";
import { Toaster,toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const Context= createContext({user:{}})

export const ContextProvider=({children})=>{

const[user,setUser]=useState({});

useEffect(()=>{
fetch("api/auth/me").then(res=>
    res.json()).then(data=>{
       if(data.success) setUser(data.user);
    });
},[])

return <Context.Provider value={{

user,setUser,

}}
>
    {children}
    <Toaster/>

</Context.Provider>

}

export const LogoutButton=()=>{

    const {user,setUser}=useContext(Context);

    const logoutHandler=async()=>{
try{

const res= await fetch("/api/auth/logout");
const data = await res.json();
if(!data.success) toast.error(data.message);
setUser({});
toast.success(data.message);

} catch(error){
    toast.error(data.message);

}
// alert('log out');



    };

return user._id?(<button onClick={logoutHandler}>Log out
    </button>):(
        <Link href={"/login"}>Login</Link>
    );

};

export const TodoButton=({id,completed})=>{
    const router =useRouter();

    const deleteHandler=async(id)=>{
try {
    alert(`Deleting,${id}` );
const res=await fetch(`/api/task/${id}`,{

    method:"DELETE",

});
const data = await res.json();
if(!data.success) return toast.error(data.message);
toast.success(data.message);
router.refresh();

} catch (error) {
    toast.error(error);
}

    };
    const updateHandler=async(id)=>{
        try {
            alert(`Updating,${id}` );
        const res=await fetch(`/api/task/${id}`,{
        
            method:"PUT",
        
        });
        const data = await res.json();
        if(!data.success) return toast.error(data.message);
        toast.success(data.message);
        router.refresh();
        
        } catch (error) {
            toast.error(error);
        }
        
            };

    return (<>
    
    <input type="checkbox" checked={completed}
    onChange={()=>updateHandler(id)}
    />
    <button onClick={()=>deleteHandler(id)}>Delete</button>
    
    </>);
};

