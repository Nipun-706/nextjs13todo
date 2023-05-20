"use client";
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
<form>
<input type="text" placeholder='Enter Name'/>
<input type="email" placeholder='Enter email' />
<input type="password" placeholder='Enter password'/>

<Link href={"/register"}>Login</Link>
<button type="submit">Sign Up</button>
</form>


    </div>
  )
}

export default page