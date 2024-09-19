"use client"
import { SignedIn,SignedOut,RedirectToSignIn, UserProfile } from "@clerk/nextjs"
import axios from "axios"
import { useEffect } from "react";
export default  function User(){
  async function getUserData(){
    const request = await axios.get('http://localhost:3000/api');
    console.log(request.data)
  }
  useEffect(()=>{
    getUserData()
  },[])
return <div className="h-full">
        <SignedIn>
        <UserProfile />
      </SignedIn>
      <SignedOut>
      <RedirectToSignIn />
      </SignedOut>    
    </div>
}