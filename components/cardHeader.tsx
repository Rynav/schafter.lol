const CardHeader = ({children}:any) => {
   return (
       <div className={"w-full text-xl text-center"}>
           <p>{children}</p>
       </div>
   )
}

export default CardHeader;