const Card = ({href, blank,children}:any) => {
    if(blank){
        return(
            <a className={"h-full select-none p-6 flex items-center justify-center flex-col gap-2"}>
                <img src="/logo.gif" alt="" className={"w-72"}/>
            </a>

        )
    }
    return (
        <a href={href} className={"select-none border border-neutral-700 rounded-xl bg-neutral-800 p-6 flex items-center flex-col gap-2 hover:bg-neutral-700 duration-100 active:bg-neutral-800  h-fit"}>
            {children}
        </a>
    )
}

export default Card