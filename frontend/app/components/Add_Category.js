"use client";
import React, { useState } from "react";

const Add_Category = () => {
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState("");

    const handleAddCategory = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const submitCategory = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/addCategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ category }),
        }).then(category => {
            setCategory("");
            setShowModal(false);
            window.location.reload();
        }).catch(err=> console.log(err));
        

    };

    return (
        <>
            <button
                className="border border-white px-3 py-2 rounded-full"
                onClick={handleAddCategory}
            >
                Add Category
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
                        <input
                            type="text"
                            placeholder="Category Name"
                            className="border p-2 w-full mb-4 bg-gray-200 text-black"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <div className="flex justify-center items-center space-x-2">
                            <button
                                className="mt-6 bg-black text-white w-[85%] px-3 py-2 rounded"
                                onClick={submitCategory}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Add_Category;
