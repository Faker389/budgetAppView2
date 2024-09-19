"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import Examples from "../@examples/page";
interface examples{
    ID?:number;
    icon:string;
    purchaseDetail:string;
    price:number
}
export default function Window({prop,fkc,array,setArray}:{
    prop:boolean,
    fkc:Function,
    array:Array<examples>|[],
    setArray:Function,
}
){
    // const router = useRouter()
    const [displayExamples,setDisplayExamples]=useState<boolean>(false)
    const price = useRef<HTMLInputElement|null>(null)
    const [purchaseDetail,setPurchaseDetail]=useState<examples|null>(null)
    const textRef = useRef<HTMLInputElement|null>(null)
    async function addExpense(obj:examples) {
        await axios.post('http://localhost:9000/addExpense',obj)
    }
    function createPurchase(){
        if(purchaseDetail===null||price.current?.value.trim().length===0){
            return 0
        }
        if(price.current){
            var obj = purchaseDetail
            obj.price=parseInt(price.current.value)
            setPurchaseDetail(obj)
            var arr = [...array,obj]
            setArray(arr)
            addExpense(obj)
            fkc(false)
        }else{
            return 0
        }
    }
    useEffect(()=>{
        if(textRef.current&&purchaseDetail?.purchaseDetail){
            textRef.current.value=purchaseDetail?.purchaseDetail
        }
    },[purchaseDetail])
    var windowStyles = `${prop?"block":"hidden"} absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center` 

    return  <div className={windowStyles}>
    <div className="w-72 h-2/4 p-3 bg-white flex relative">
        <i className="fa-solid fa-x text-4xl absolute top-3 right-4 cursor-pointer" onClick={()=>fkc(false)}></i>
        <table className="mt-12 h-56 ">
            <tr className="flex justify-around w-64 mt-6 items-center ">
                <td className="text-left font-bold text-xl">Select emote</td>
                <td><div onClick={()=>setDisplayExamples(true)} className="w-10 h-10 bg-white rounded-full border cursor-pointer flex justify-center items-center text-xl border-black">{purchaseDetail?.icon}</div></td>
            </tr>
            <tr className="flex justify-around w-64 mt-6 items-center ">
                <td className="text-left font-bold text-xl">Purchase detail</td>
                <td><input type="text" readOnly={purchaseDetail?.purchaseDetail==="Deposit Money"?true:false} className="font-semibold p-1 rounded-xl border border-black w-20" ref={textRef}/></td>
            </tr>
            <tr className="flex justify-around w-64 mt-6 items-center ">
                <td className="text-left font-bold text-xl">Purchase price</td>
                <td><input type="number" ref={price}  className="font-semibold p-1 rounded-xl border border-black w-20" /></td>
            </tr>
            <tr className="flex justify-center mt-8" >
                <td colSpan={2}><button className="border-4 cursor-pointer  font-bold border-black rounded-xl px-2.5 py-1" onClick={createPurchase}>Add purchase</button></td>
            </tr>
        </table>
    </div>
    {displayExamples?<Examples closeExamples={setDisplayExamples} setDetail={setPurchaseDetail} />:""}
</div>
}