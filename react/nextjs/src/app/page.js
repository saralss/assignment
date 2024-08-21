
'use client'
import { Button, Card, CardBody, DatePicker, Image, Input } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Register from "./register/page"

const Login = ()=> {
  const router = useRouter()
  const handleRegister = ()=> {
      router.push('/home')
  }
  return (
    <div className="flex justify-center items-center">
      <div class="h-500 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <Card className="flex w-96 p-4 m-12">
          <Image
      width={500}
      alt="NextUI hero Image"
      src="logo.png"
    />
      <CardBody className="flex gap-4 flex width">
    <Input placeholder="Enter Email"/>
    <Input placeholder="enter password"/>
    <Button onClick={handleRegister} className="bg-blue-400 text-white">Login</Button>
    <p>Don't have an account? <Link href="/register">Register</Link>  instead</p>
    <Link href="/forget-password">Forget Password</Link>
    </CardBody>
    </Card>
    
    </div>
    </div>

  )
}

//JSX

export default Login

// 'use client'
// import { Button } from '@nextui-org/react';
// import { useState } from "react";

// import React from 'react'

// const Home = () => {
//   let [num, setNum] = useState(20);
//   const handleIncrement = ()=>{
//     setNum(num + 1)
  
//   }

//   const handleDecrement = ()=>{
//     setNum(num - 1)
//   }
//   return (
//     <div>
//       {num}
//       <Button onClick={handleIncrement}>Increment</Button>
//       <Button onClick={handleDecrement}>Decrement</Button>
//       </div>
//   )
// }




// export default Home
