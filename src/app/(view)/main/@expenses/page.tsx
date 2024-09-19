"use client"
import axios from "axios";
import { useEffect, useState } from "react"
interface examples{
    ID?:number;
    icon:string;
    purchaseDetail:string;
    price:number
}
function createDate(data: Date): string {
    var today = "";
    data.getDay() < 10?today += `0${data.getDay()}-`:today += `${data.getDay()}-`
    data.getDay() < 10?today += `0${data.getMonth()+1}-`:today += `${data.getMonth()+1}-`
    today+=data.getFullYear()

    return today;
}
export default function Expenses({fkc,array,setArray}:{
    fkc:Function,
    array:Array<examples>|[],
    setArray:Function
    
}){
    const [displayError,setDisplayError] =useState<boolean>(false)
    
    const today = createDate(new Date())
    async function getExpenses() {
        setDisplayError(false)
        try{
            const request = await axios.post('http://localhost:9000/getExpenses',{ID:"user_2f5aBo5vnxPUzQFZ8wids0wfz42"}).then(e=>{
                setArray(e.data)
                var cena =e.data.reduce((prev:number,item:examples)=>{
                    return prev+item.price
                },0)
                fkc(cena)
                return e.data 
            })
        }catch(err){
            setDisplayError(true)
        }
    }
    if(displayError){
        throw new Error("Cannot fetch data")
    }
    useEffect(()=>{
    getExpenses()
    },[])
    return <div className="h-9vh overflow-scroll">
        <table className="w-full  z-0 overflow-scroll max-h-fit self-end mt-4">
            {
               array.map((e,index:number)=>{
                  return  <tr key={index} className=" border-t-2 border-t-black text-xl">
                        <td className="p-3 ">{e.icon}</td>
                        <td className="p-3">{e.purchaseDetail}</td>
                        <td className={e.purchaseDetail==="Deposit Money"?'text-green-600 p-3 flex flex-col':"text-red-600 p-3 flex flex-col"}>{e.purchaseDetail==="Deposit Money"?`+${e.price}zł`:`${e.price}zł`}
                            <span className="text-black text-xs">{today}</span>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>
}