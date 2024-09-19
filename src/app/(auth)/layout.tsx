export default function LoginLayout({children}:{
    children:React.ReactNode
}){
    return <html>
        <body className="flex items-center justify-center h-screen bg-stone-800">
            {children}
        </body>
    </html>
}