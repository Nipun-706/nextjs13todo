// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import "../app/styles/app.scss";
import Header from"../app/header";
import { ContextProvider } from "./components/client";

export const metadata = {
  title: 'Todo App',
  description: 'Generated by Nipun',
}

export default function RootLayout({children}){
  return (
    <html lang="en">

      <body >
<ContextProvider>
<>
<Header/>
{children}


</>

</ContextProvider>

      </body>
    </html>
  )
}
