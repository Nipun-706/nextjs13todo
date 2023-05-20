import React from 'react'
import Link from 'next/link'
import {LogoutButton} from '../app/components/client';

const header = () => {
  return (
    <div>
<Link href={"/"}>Home</Link>
<Link href={"/about"}>About</Link>


<LogoutButton/>


    </div>
  )
}

export default header