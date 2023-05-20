"use client";
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
<form>
<input type="email" placeholder='Enter email' />
<input type="password" placeholder='Enter password'/>
<Link href={"/register"}>New User</Link>
<button type="submit">Login</button>
</form>


    </div>
  )
}

export default page