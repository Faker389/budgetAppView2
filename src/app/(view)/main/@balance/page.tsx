"use client"
import Link from "next/link"
import { useState } from "react"

export default function Balance({prop,fkc}:{
    prop:number,
    fkc:Function
}){
    var balanceStyles = `${prop>=0?"text-green-400":"text-red-600"} text-4xl`
    return <div className="flex justify-around items-center mt-4 mb-4">
    <p className={balanceStyles}>{prop}zł</p>
    <i className="cursor-pointer text-4xl fa-solid fa-plus" onClick={()=>fkc(true)}></i>
</div>
}