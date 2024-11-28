import React from "react";

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
        <div className="min-h-screen w-[85%] mx-auto mt-20 bg-black text-white">
            <header className="flex justify-around items-center">
                <div>
                    <ul className="flex gap-4 justify-center items-center">
                        <li className="border border-white px-4 py-2 rounded-full">Land Animal</li>
                        <li className="border border-white px-4 py-2 rounded-full">Bird</li>
                        <li className="border border-white px-4 py-2 rounded-full">Fish</li>
                    </ul>
                </div>
                <div className="space-x-4">
                    <button className="border border-white px-3 py-2 rounded-full">
                        Add Animal
                    </button>
                    <button className="border border-white px-3 py-2 rounded-full">
                        Add Category
                    </button>
                </div>
            </header>
            <main>
              
            </main>
        </div>
    );
}
