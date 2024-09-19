
export const metadata={
    title:"Main page"
}
export default function Layout({children}:{
    children:React.ReactNode,
}){

    return<div className="w-full h-full z-10">

        <div>{children}</div>
    </div> 

}