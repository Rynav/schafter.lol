const Badge = ({color,text}:any) =>{
	return (
		<div className={"w-fit px-2 py-1 mt-1 rounded-2xl text-white"} style={{backgroundColor: color}}>
			<p className={"[text-shadow:_1px_1px_0_#000000]"}>{text}</p>
		</div>
	)
}

export default Badge