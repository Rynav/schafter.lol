const ImageMosaicPlaceholder = ({amount}:any) => {
    return(
        <div className={"bg-neutral-700 flex items-center justify-center text-neutral-400"}>
            <p>
                {amount} more...
            </p>
        </div>
    )
}

export default ImageMosaicPlaceholder