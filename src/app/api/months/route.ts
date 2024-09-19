"use server"
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    try {
        const response = await axios.get("http://localhost:9000/chartDataFull");
        return Response.json(response.data)
    } catch (error) {
        console.error("Error fetching chart data:", error);
        return null;
    }
}