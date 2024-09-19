"use server"
import { auth } from '@clerk/nextjs/server';
import { cookies } from 'next/headers';
export async function GET() {
  const {userId, getToken} = auth();
 
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
 return Response.json(userId)
}