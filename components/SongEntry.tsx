const SongEntry = ({songNumber, songName,songSlug, songArtists,songLength}:any) => {
	return (
		<a href={"/piosenka/"+songSlug} className={"bg-neutral-800 h-10 rounded-xl grid grid-cols-10 px-2 duration-100 hover:bg-neutral-700"}>
			<p className={"w-fit flex items-center"}>{songNumber}</p>
			<p className={"col-span-5 flex items-center"}>{songName}</p>
			<p className={"col-span-3 flex items-center"}>{songArtists}</p>
			<p className={"flex items-center justify-end text-neutral-500"}>{songLength}</p>
		</a>
	)
}

export default SongEntry