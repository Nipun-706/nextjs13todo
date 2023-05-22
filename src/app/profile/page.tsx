"use client";
import React,{useContext} from 'react'
import { Context } from '../components/client';
import { redirect } from 'next/navigation';

const page = () => {
const {user}=useContext(Context);

if(!user._id) return redirect("/login");

  return (
    <div>

        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
    </div>
  )
}

export default page;