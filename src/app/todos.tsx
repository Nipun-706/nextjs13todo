import React from 'react'
import { TodoItem } from './components/server'
import {cookies} from "next/headers"

const fetchToDo=async(token)=>{

    try{
      const res= await fetch(`${process.env.URL}/api/mytask`,{
       
  cache:"no-cache",
  headers:{
    cookie:`token=${token}`,
  }
  
  });
  const data=await res.json();
  if(!data.success) return [];
  return data.tasks;
  
    }
    catch(error){
      return [];
  
    }
  }
const todos = async() => {

    const token= cookies().get("token")?.value;
    const tasks = await fetchToDo(token);
  return (
    <div>
    {
    
      tasks?.map((i)=>(
    <TodoItem 
    title={i.title} 
    description={i.description} 
    key={i._id} 
    id={i._id} 
    completed={i.isCompleted}/>
       ))
       } </div>
  )
}

export default todos;