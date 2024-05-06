const CardFooter = ({children}: any) => {
    return (
        <div className={"text-neutral-400 text-sm grid grid-cols-2 w-full"}>
            {children}
        </div>
    )
}

export default CardFooter;