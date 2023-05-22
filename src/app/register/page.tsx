"use client";
import Link from 'next/link'
import React,{ useContext, useState } from 'react'
import { Context } from '../components/client';
import { toast } from "react-hot-toast";
import {redirect} from 'next/navigation';

const page = () => {

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
const [password, SetPassword]= useState("");
const {user,setUser}= useContext(Context);

const registerHandler= async(e)=>{
e.preventDefault();

try{

  const res= await fetch("/api/auth/register ",{
    method:"POST",
body:JSON.stringify({
name,
email,
password,

}),

headers:{
"Content-Type":"application/json",
}
  });

  const data= await res.json();
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
<form onSubmit={registerHandler}>
<input onChange={(e)=>{setName(e.target.value)}}
value={name}
 type="text" 
 placeholder='Enter Name' />

<input onChange={(e)=>{setEmail(e.target.value)}}
value={email}
 type="email" 
 placeholder='Enter email' />

<input onChange={(e)=>{SetPassword(e.target.value)}}
value={password}
type="password" 

placeholder='Enter password'/>
<input type="password" placeholder='Enter password'/>

<Link href={"/register"}>Login</Link>
<button type="submit">Sign Up</button>
</form>


    </div>
  )
}

export default page