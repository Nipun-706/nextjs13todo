"use client";
import React,{useContext, useState} from 'react'
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { Context } from './components/client'
import {redirect} from 'next/navigation';

const addTodoForm = () => {

const [title,setTitle]= useState("");
const [description,setDescription]= useState("");
const {user}=useContext(Context);
const router= useRouter();

const submitHandler= async(e)=>{
e.preventDefault();


try{

  const res= await fetch("/api/newtask ",{
    method:"POST",
body:JSON.stringify({

  title,
  description,

}),

headers:{
"Content-Type":"application/json",
}
  });

  const data= await res.json();
  console.log(data);
  if(!data.success) return toast.error(data.message);  
  //  setUser(data.user);
   toast.success(data.message);
   router.refresh();
   setTitle("");
   setDescription("");

}catch(error){
  toast.error(error);
};
};

if(!user._id) return redirect("/login");

  return (
    <div>
<form onSubmit={submitHandler}>
<input
onChange={(e)=>{setTitle(e.target.value)}}
value={title} 
type="text" placeholder='Enter Title' />

<input 
onChange={(e)=>{setDescription(e.target.value)}}
value={description}

type="text" placeholder='Enter Description'/>

<button type="submit">Add Task</button>
</form>


    </div>
  )
}

export default addTodoForm