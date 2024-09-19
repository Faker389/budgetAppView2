"use client"
export default function ErrorBoundary({error,reset}:{
    error:Error,
    reset:()=> void
}){
    return <div className="w-full h-40 flex items-center justify-center  ">
        <h1>
            Couldn`t fetch datata
        </h1>
        <input type="button" className="ml-3 underline cursor-pointer font-bold" value="Try again" onClick={reset} />
        </div>
}