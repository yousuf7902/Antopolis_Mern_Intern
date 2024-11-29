"use client";
import React, { useState } from "react";

export default function Add_Animal() {
    const [showModal, setShowModal] = useState(false);

    const handleAddAnimal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <button
                onClick={handleAddAnimal}
                className="border border-white px-3 py-2 rounded-full"
            >
                Add Animal
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white text-black p-6 rounded-2xl w-[400px]">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl mb-4">Add Animal</h2>
                            <button className="px-3 py-2 mb-4 bg-gray-400 text-black rounded-xl font-bold" onClick={handleCloseModal}>
                                {" "}
                                X{" "}
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Animal Name"
                            className="border p-2 w-full mb-4 bg-gray-200 text-black"
                        />
                        <input type="file" className="w-full mb-4" />
                        <div className="flex justify-center items-center space-x-2">
                            <button className="mt-6 bg-black text-white w-[85%] px-3 py-2 rounded">
                                Create Animal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
