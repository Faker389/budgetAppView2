"use client"
import Balance from "./@balance/page"
import Window from "./@window/page";
import Expenses from "./@expenses/page"
import axios from "axios";
interface examples{
    ID?:number;
    icon:string;
    purchaseDetail:string;
    price:number
}
import { useEffect, useRef, useState } from "react"
export default function Main(){
    const [balance,setBalance]=useState<number>(0)
    const [displayWindow,setDisplayWidnow]=useState<boolean>(false)
    const [purchacesArray,setPurchacesArray]=useState<Array<examples>|[]>([])

    return <div className=" w-full h-full flex flex-col">
        <Balance prop={balance} fkc={setDisplayWidnow}/>
        <Expenses fkc={setBalance} array={purchacesArray} setArray={setPurchacesArray} />
        <Window prop={displayWindow} fkc={setDisplayWidnow} array={purchacesArray} setArray={setPurchacesArray}/>
    </div>
}