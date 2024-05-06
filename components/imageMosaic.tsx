const ImageMosaic = ({children}:any) => {
    return  (
        <div className={"grid grid-cols-2 grid-rows-1 w-64 h-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
            {children}
        </div>
    )
}

export default ImageMosaic