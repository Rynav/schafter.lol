"use client";
import {useEffect, useState} from "react";

export default function Home() {
    const [discs, setDiscs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:3001/api/schafie/plyty').catch(e => {
                console.log(e)
                setError(true);
                return;
            });
            const jsonData = await data?.json();
            setDiscs(jsonData);
            setLoading(false)
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
    else if(error) {
        return(
            <main className={"w-full h-screen flex flex-col items-center justify-center"}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">We can't connect to our backend to recover the data!</p>
                    <p>There are two possible issues:</p>
                    <ol className={"ml-2"}>
                        <li> {">"} Our backend is dead. <a href="https://status.rynav.xyz" target={"_blank"} className={"text-primary underline"}>Check status here</a></li>
                        <li> {">"} Something on your end is blocking our backend</li>
                    </ol>
                </div>
            </main>
        )
    }
    return (
        <main className={"w-full h-screen flex flex-col items-center justify-center"}>
            <div className={"grid grid-cols-5 gap-2"}>

                {discs.map(plyta => {
                    return (
                        <a href={plyta.discSlug != "blank"?"/plyty/"+plyta.discSlug: "https://discord.gg/rPJh4aZpPE" } className={"flex items-center duration-100 hover:scale-110"}><img src={plyta.discSlug != "blank"? plyta.discImage: "/logo.gif"} width={256} height={256}/></a>
                    )
                })}
            </div>
            <a className={"pt-10"} href="../"> &lt;- go back</a>
        </main>
    )
}