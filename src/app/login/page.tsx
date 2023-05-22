"use client";
import React,{ useContext, useState } from 'react'
import Link from 'next/link';
import { Context } from '../components/client';
import {redirect} from 'next/navigation';
import { toast } from "react-hot-toast";
const page = () => {

const [email, setEmail]= useState("");
const [password, SetPassword]= useState("");
const {user,setUser}= useContext(Context);

const loginHandler= async(e)=>{

  e.preventDefault();
  try{
    const res= await fetch("/api/auth/login",{
      method:"POST",
body:JSON.stringify({

  email,
  password,

}),

headers:{
  "Content-Type":"application/json",
}
    });

    const data=await res.json();
console.log(data);
if(!data.success) return toast.error(data.message);  
 setUser(data.user);
 toast.success(data.message);


  }catch(error){
return toast.error(error);
  }
};
  if(user._id) return redirect("/");

  return (
    <div>
<form onSubmit={loginHandler}>
<input onChange={(e)=>{setEmail(e.target.value)}}
value={email}
 type="email" 
 placeholder='Enter email' />

<input onChange={(e)=>{SetPassword(e.target.value)}}
value={password}
type="password" 

placeholder='Enter password'/>

<Link href={"/register"}>New User</Link>
<button type="submit">Login</button>
</form>


    </div>
  )
}

export default page;