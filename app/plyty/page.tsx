import Card from "@/components/card";
import CardHeader from "@/components/cardHeader";
import ImageMosaic from "@/components/imageMosaic";
import CardFooter from "@/components/cardFooter";
import Badge from "@/components/badge";

export default function Home() {
    return(
        <main className={"w-full h-screen flex flex-col items-center justify-center"}>
            <div className={"grid grid-cols-3 gap-2"}>
                <Card href={"/plyty/hors-doeuvres"}>
                    <CardHeader>
                        Hors D'oeuvres
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/hors-cover.jpg" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-2 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2017"}/>
                            <Badge color={"bg-emerald-600"} text={"💿EP"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/futura"}>
                    <CardHeader>
                        FUTURA
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/futura-cover.jpg" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-2 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2019"}/>
                            <Badge color={"bg-emerald-600"} text={"📀LP"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/audiotele"}>
                    <CardHeader>
                        Audiotele
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/audiotele-cover.jpg" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-2 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2020"}/>
                            <Badge color={"bg-emerald-600"} text={"📀LP"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/ramotka"}>
                    <CardHeader>
                        RAMOTKA
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/ramotka-cover.jpg" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-2 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2023"}/>
                            <Badge color={"bg-emerald-600"} text={"💿EP"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/schafter"}>
                    <CardHeader>
                        schafter
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/schafter-cover.png" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-2 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2018"}/>
                            <Badge color={"bg-emerald-600"} text={"📀LP"}/>
                            <Badge color={"bg-orange-500"} text={"🛠️CUSTOM"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/bumps"}>
                    <CardHeader>
                        [BUMPS]
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/bumpsa-cover.jpg" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-1 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2016"}/>
                            <Badge color={"bg-emerald-600"} text={"💿EP"}/>
                            <Badge color={"bg-orange-500"} text={"🛠️CUSTOM"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/billdapimpep"}>
                    <CardHeader>
                        BILLY DA PIMP EP
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/billydapimp-cover.png" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-1 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2019"}/>
                            <Badge color={"bg-emerald-600"} text={"💿EP"}/>
                            <Badge color={"bg-orange-500"} text={"🛠️CUSTOM"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
                <Card href={"/plyty/tacoep"}>
                    <CardHeader>
                        tacoep
                    </CardHeader>
                    <div className={"w-64 border border-neutral-700 rounded-2xl overflow-hidden"}>
                        <img src="/covers/tacoep-cover.png" alt=""/>
                    </div>
                    <CardFooter>
                        <div className={"flex flex-row gap-1 col-span-2"}>
                            <Badge color={"bg-emerald-600"} text={"📅2018"}/>
                            <Badge color={"bg-emerald-600"} text={"💿EP"}/>
                            <Badge color={"bg-orange-500"} text={"👁️‍🗨️LEAK"}/>
                        </div>
                        <p>Updated: 10/10/24</p>
                        <p className={"text-right"}>Rynav</p>
                    </CardFooter>
                </Card>
            </div>
            <a className={"pt-10"} href="../"> &lt;- go back</a>
        </main>
    )
}