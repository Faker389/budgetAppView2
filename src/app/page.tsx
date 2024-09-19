'use client'
import { UserButton,SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default function Home() {
  
  return<div>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>    
    <SignedIn>
      {redirect("/main")}
    </SignedIn>
  </div>
}
