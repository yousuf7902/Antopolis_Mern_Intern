import Image from "next/image";
import React from "react";
import img1 from "../public/images/elephant.jpg";
import Add_Animal from "./components/Add_Animal";
import Add_Category from "./components/Add_Category";
import getAllCategory from "@/api/getAllCategory";
import getAllAnimals from "@/api/getAllAnimals";
import { base_url } from "@/server";



export default async function Home() {
    const category = await getAllCategory();
    const animals = await getAllAnimals();
 
    return (
        <div className="min-h-screen w-[80%] mx-auto mt-20 bg-black text-white">
            <header className="flex justify-between items-center">
                <div>
                    <ul className="flex gap-4 justify-center items-center">
                        {category.map((c) => (
                            <li key={c.id} className="border border-white px-4 py-2 rounded-full">
                                {c.category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-x-4">
                    <Add_Animal />
                    <Add_Category />
                </div>
            </header>
            <main>
                <section className="mt-20 grid grid-cols-6 gap-10">
                    {animals.map((animal) => (
                        <div className="flex flex-col justify-center items-center">
                            <div className="border border-white rounded-xl">
                                <Image
                                    src={`${base_url}/uploads/${animal.image.url}`}
                                    alt={animal.name }
                                    width={200}
                                    height={200}
                                    className="w-[200px] h-[200px] mx-auto rounded-xl"
                                />
                            </div>
                            <div>
                                <h1 className="text-white mt-4">{animal.name}</h1>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
