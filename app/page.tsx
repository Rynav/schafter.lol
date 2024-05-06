import Image from "next/image";
import Card from "@/components/card";
import ImageMosaic from "@/components/imageMosaic";
import CardHeader from "@/components/cardHeader";
import CardFooter from "@/components/cardFooter";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-row items-center justify-center gap-2 p-24">
            <Card href={"/plyty"}>
                <CardHeader>
                    Muzyka
                </CardHeader>
                <ImageMosaic>
                    <img src="http://localhost:3001/cdn/covers/hors-cover.jpg" alt=""/>
                    <img src="http://localhost:3001/cdn/covers/audiotele-cover.jpg" alt=""/>
                    <img src="http://localhost:3001/cdn/covers/futura-cover.jpg" alt=""/>
                    <div className={"bg-neutral-700 flex items-center justify-center text-neutral-400"}>
                        <p>6 more...</p>
                    </div>
                </ImageMosaic>
                <CardFooter>
                    <p>Updated: 10/10/24</p>
                    <p className={"text-right"}>Rynav</p>
                </CardFooter>
            </Card>
            <Card href={"/lore"}>
                <CardHeader>
                    Lore
                </CardHeader>
                <ImageMosaic>
                    <img src="/covers/hors-cover.jpg" alt=""/>
                    <img src="/covers/audiotele-cover.jpg" alt=""/>
                    <img src="/covers/futura-cover.jpg" alt=""/>
                </ImageMosaic>
                <CardFooter>
                    <p>Updated: 10/10/24</p>
                    <p className={"text-right"}>Rynav</p>
                </CardFooter>
            </Card>
        </main>
    );
}
