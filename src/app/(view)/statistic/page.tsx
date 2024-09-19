"use client"
import { UserButton,SignedIn,SignedOut,RedirectToSignIn } from "@clerk/nextjs"
import BarChart from "@/components/chart";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react"
export default function Statistic(){
    const [chartDatastate,setChartDataState]=useState<any>();
    const [months,setMonths]=useState<Array<string>|[]>([])
    async function getChartData(){
        try {
            const request = await axios.get("http://localhost:3000/api/months") ;
            setChartDataState(request.data)
            setMonths(request.data.labels)
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    }
    useEffect(()=>{
        getChartData()
    },[])
    function showMonth(e:ChangeEvent<HTMLSelectElement>){
        if(e.target.value==="all"){
            getChartData()
            return 0
        }
        (async () => {
            try {
                const request = await axios.get(`http://localhost:3000/api/months/${e.target.value}`) ;
                setChartDataState(request.data)
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        })();
    }

    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>    
    return <div className="mt-3 h-full">
        {chartDatastate&&<BarChart data={chartDatastate} />}
        <div className="w-full flex items-center justify-left p-3">
        <label className="mr-3 text-xl">Chose time line:</label><select className="border-2 border-black p-1 " onChange={(e)=>showMonth(e)}>
            <option value="all">All</option>
            {
                months.map((e:string,index:number)=>{
                    return <option key={index} value={index+1}>{e}</option>
                })
            }
        </select>
        </div>
    </div>
}