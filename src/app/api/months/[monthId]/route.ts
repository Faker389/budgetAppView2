"use server"
import axios from "axios";
import { NextRequest } from "next/server";
interface obj{
    price:number,
    data:string
}
export async function GET(_request:NextRequest,{params}:{
    params:{monthId:string}
}){
    if(parseInt(params.monthId)>12){
        throw new Error("Invalid month")
    }
            const response = await axios.post("http://localhost:9000/chartDataMonth",{monthId:params.monthId});
            const dat = await response.data
        return Response.json(dat)
    }