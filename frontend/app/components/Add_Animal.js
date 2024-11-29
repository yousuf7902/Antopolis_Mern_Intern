"use client";
import React, { useEffect, useState } from "react";

export default function Add_Animal() {
    const [showModal, setShowModal] = useState(false);
    const [animalName, setAnimalName] = useState("");
    const [img, setImg] = useState(null);

    const handleAddAnimal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleImageData = (e) => {
        const file = e.target.files[0];
        setImg(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("animalName", animalName);
        formData.append("file", img);

        fetch("http://localhost:8080/addAnimal", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                setAnimalName("");
                setImg(null);
                setShowModal(false);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };

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
                            <button
                                className="px-3 py-2 mb-4 bg-gray-400 text-black rounded-xl font-bold"
                                onClick={handleCloseModal}
                            >
                                {" "}
                                X{" "}
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                            <input
                                type="text"
                                placeholder="Animal Name"
                                className="border p-2 w-full mb-4 bg-gray-200 text-black"
                                onChange={(e) => setAnimalName(e.target.value)}
                            />
                            <input
                                type="file"
                                name="image"
                                className="w-full mb-4"
                                accept=".jpg, .jpeg, .png"
                                onChange={handleImageData}
                            />
                            <div className="flex justify-center items-center space-x-2">
                                <button
                                    type="submit"
                                    className="mt-6 bg-black text-white w-[85%] px-3 py-2 rounded"
                                >
                                    Create Animal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
