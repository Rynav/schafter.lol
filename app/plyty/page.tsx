"use client";
import Card from "@/components/card";
import CardHeader from "@/components/cardHeader";
import ImageMosaic from "@/components/imageMosaic";
import CardFooter from "@/components/cardFooter";
import Badge from "@/components/badge";
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
                        <Card key={plyta._id} href={"/plyty/" + plyta.discSlug} blank={plyta?.discName == "blank"}>
                            <CardHeader>
                                {plyta.discName}
                            </CardHeader>
                            <div className={"w-72 border border-neutral-700 rounded-2xl overflow-hidden"}>
                                <img src={plyta.discImage} alt={plyta.discName + " cover"}/>
                            </div>
                            <CardFooter>
                                <div className={"flex flex-row gap-2 col-span-2 mb-2"}>
                                    {plyta.discBadges.map((discBadge: any, idx: number) => {
                                        return(
                                            <Badge key={idx} color={discBadge.color} text={discBadge.emoji + discBadge.title}/>
                                        )
                                    })}
                                </div>
                                <p>Updated: {plyta.updatedAt}</p>
                                <p className={"text-right"}>{plyta.updatedBy}</p>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
            <a className={"pt-10"} href="../"> &lt;- go back</a>
        </main>
    )
}