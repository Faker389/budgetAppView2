import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs";
export default function ViewLayout({children}:{
    children:React.ReactNode
}){
    return <html> 
        <body>

            <div className='w-full h-screen flex-col overflow-hidden bg-white flex z-20'>
              <SignOutButton>
                <i className="fa-solid fa-arrow-right-from-bracket self-end m-3 absolute right-0 text-2xl cursor-pointer"></i>
                </SignOutButton>  
                {children}
                    <div className='w-full h-20 bg-white border-t-2 border-t-black self-end flex justify-around items-center'>
                        <Link href="/main"><i className="cursor-pointer text-3xl fa-solid fa-house"></i></Link>
                        <Link href="/statistic"><i className="cursor-pointer text-3xl fa-solid fa-chart-simple"></i></Link>
                        <Link href="/user"><i className="cursor-pointer text-3xl fa-solid fa-user"></i></Link>
                    </div>
                </div>
        </body>
    </html>
}