import Image from "next/image";
import React from "react";
import img1 from "../public/images/elephant.jpg";
import Add_Animal from "./components/Add_Animal";
import Add_Category from "./components/Add_Category";

export default function Home() {
    const data = [
        {
            id: 1,
            name: "Elephant",
            category: "Mammal",
            image: "https://example.com/images/elephant.jpg",
        },
        {
            id: 2,
            name: "Horse",
            category: "Mammal",
            image: "https://example.com/images/horse.jpg",
        },
        {
            id: 3,
            name: "Fox",
            category: "Mammal",
            image: "https://example.com/images/fox.jpg",
        },
    ];

    return (
        <div className="min-h-screen w-[80%] mx-auto mt-20 bg-black text-white">
            <header className="flex justify-between items-center">
                <div>
                    <ul className="flex gap-4 justify-center items-center">
                        <li className="border border-white px-4 py-2 rounded-full">Land Animal</li>
                        <li className="border border-white px-4 py-2 rounded-full">Bird</li>
                        <li className="border border-white px-4 py-2 rounded-full">Fish</li>
                    </ul>
                </div>
                <div className="space-x-4">
                    <Add_Animal/>
                    <Add_Category/>
                </div>
            </header>
            <main>
                <section className="mt-20 grid grid-cols-6 gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="border border-white rounded-xl">
                            <Image
                                src={img1}
                                alt="this is a pic"
                                className="w-[200px] h-[200px] mx-auto rounded-xl "
                            ></Image>
                        </div>
                        <div>
                            <h1 className="text-white mt-4">Elephant</h1>
                        </div>
                    </div>
                    
                </section>
            </main>
        </div>
    );
}
