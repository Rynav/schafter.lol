"use client";

import {useEffect, useState} from "react";
import Card from "@/components/card";
import SongEntry from "@/components/SongEntry";

interface discInfo {
	_id: number,
	discName: string,
	discReleaseDate: string,
	discAuthors: [string],
	discLength: number,
	discStreaming: {soundcloud: string, youtube: string, spotify: string},
	discDownload: {mp3: string, wav: string },
	discTracklist: [{title: string, authors: string, length: string}];
	discImage: string,
	discSlug: string,
}


export default function Page({ params }: { params: { slug: string } }) {

	const [songData, setSongData] = useState<discInfo>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string>("")

	useEffect(() => {
		const fetchData = async() => {
			const data = await fetch('http://localhost:3001/api/schafie/plyty/'+params.slug).catch(e => {
				setError("Server error")
				setLoading(false)
				return;
			});
			if(data?.status == 404) {
				setError("404 Not found!");
			 	setLoading(false)
				return
			}
			const jsonData = await data?.json();
			setSongData(jsonData);
			setLoading(false)
			return;
		}
		fetchData();
	},[])


	if(loading) {
		return(
			<main className={"w-full h-screen flex flex-col items-center justify-center"}>
				<span className="loading loading-ball loading-lg"></span>
			</main>
		)
	}
	else if(error == "Server error"){
		return (
			<main className={"w-full h-screen flex flex-col items-center justify-center"}>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">We can't connect to our backend to get the data!</p>
					<p>There are two possible problems:</p>
					<ol className={"ml-2"}>
						<li> {">"} Our backend is dead. <a href="https://status.rynav.xyz" target={"_blank"}
														   className={"text-primary underline"}>Check status here</a>
						</li>
						<li> {">"} Something on your end is blocking our backend</li>
					</ol>
				</div>
			</main>
		)
	} else if (error != "") {
		return (
			<main className={"w-full h-screen flex flex-col items-center justify-center"}>
				<div role="alert" className="alert alert-error w-64">
					<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
						 viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<span>{error}</span>
				</div>
				<a className={"pt-10"} href="/plyty"> &lt;- go back</a>
			</main>
		)
	}

	return (
		<main className={"flex min-h-screen flex-col items-center justify-center gap-2 p-24"}>
			<div className={"grid grid-cols-2 min-w-fit gap-5 h-full"}>
				<div className={"flex items-center justify-center"}>
					<Card>
						<img className={"rounded-2xl"} src={songData!.discImage} alt="" width={384}/>
						<div className={"grid grid-cols-2 w-96 gap-3"}>
							<p>Tytuł:</p>
							<p className={"text-right"}>{songData!.discName}</p>
							<p>Data wydania:</p>
							<p className={"text-right"}>{songData!.discReleaseDate}</p>
							{songData?.discAuthors.length! >= 1 && (
								<>
									<p>Gościnnie:</p>
									<p className={"text-right"}>{songData?.discAuthors.join(", ")}</p>
								</>
							)}
							<p>Długość:</p>
							<p className={"text-right"}>{new Date(songData!.discLength * 1000).toISOString().slice(14, 19)}</p>
							{(songData?.discStreaming.soundcloud ||songData?.discStreaming.youtube || songData?.discStreaming.spotify) && (
								<>
									<p>Streaming:</p>
									<div className={"flex items-center justify-end gap-2"}>

										{songData?.discStreaming.soundcloud ? <a href={songData!.discStreaming.soundcloud}
																		target={"_blank"}
																		className="text-3xl bi bi-cloudy-fill duration-100 hover:text-[#F26F23]"></a> : ""}
										{songData?.discStreaming.youtube ? <a href={songData!.discStreaming.youtube}
																		target={"_blank"}
																		className="text-3xl bi bi-youtube duration-100 hover:text-[#FF0000]"></a> : ""}
										{songData?.discStreaming.spotify ? <a href={songData!.discStreaming.spotify}
																		 target={"_blank"}
																		 className="text-3xl bi bi-spotify duration-100 hover:text-[#1DB954]"></a> : ""}
									</div>
								</>
							)}
							<p>Download:</p>
							<div className={"flex items-center justify-end gap-2"}>
								{songData?.discDownload.mp3 ? <a href={songData!.discDownload.mp3 }
								target={"_blank"}
								className="text-3xl bi bi-filetype-mp3 duration-100 hover:text-neutral-400"></a> : ""}
								{songData?.discDownload.wav  ? <a href={songData!.discDownload.wav }
															   target={"_blank"}
															   className="text-3xl bi bi-filetype-wav duration-100 hover:text-neutral-400"></a> : ""}

							</div>
						</div>
					</Card>
				</div>
				<div className={"flex flex-col gap-1 w-[32vw]"}>
					{songData?.discTracklist.map((track, idx) => {
						return (
							<SongEntry key={idx} songSlug={songData?.discSlug + "-" + track.title.replace(/[^a-zA-Z]/g, '').toLowerCase()} songNumber={idx + 1} songName={track.title} songArtists={track.authors}
									   songLength={track.length}/>
						)
					})}
				</div>
			</div>
			<a className={"pt-10"} href="/plyty"> &lt;- go back</a>
		</main>
	)
}