import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center bg-gray-100 min-h-screen">
            <div className="text-6xl mb-4">&#x1F338;</div>
            <h1 className="text-4xl font-bold mb-3">&#x65E5;&#x8BED;&#x5B66;&#x4E60;&#x5E94;&#x7528;</h1>
            <p className="text-gray-500 text-lg mb-10">&#x5B66;&#x4E60;&#x5E73;&#x5047;&#x540D;&#xFF65;&#x7247;&#x5047;&#x540D;&#xFF65;&#x5355;&#x8BCD;&#xFF65;&#x8BED;&#x6CD5;&#xFF0C;&#x8F7B;&#x677E;&#x5F00;&#x59CB;&#x65E5;&#x8BED;&#x4E4B;&#x65C5;&#xFF01;</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                <Link to="/hiragana" className="flex items-center gap-3 p-5 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-lg font-semibold">
                    <span className="text-2xl">&#x1F233;</span> &#x5E73;&#x5047;&#x540D;&#x5B66;&#x4E60;
                </Link>
                <Link to="/katakana" className="flex items-center gap-3 p-5 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition text-lg font-semibold">
                    <span className="text-2xl">&#x1F524;</span> &#x7247;&#x5047;&#x540D;&#x5B66;&#x4E60;
                </Link>
                <Link to="/vocabulary" className="flex items-center gap-3 p-5 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold">
                    <span className="text-2xl">&#x1F4DA;</span> &#x5355;&#x8BCD;&#x80CC;&#x8BF5;
                </Link>
                <Link to="/grammar" className="flex items-center gap-3 p-5 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition text-lg font-semibold">
                    <span className="text-2xl">&#x1F4D6;</span> &#x8BED;&#x6CD5;&#x5B66;&#x4E60;
                </Link>
                <Link to="/quiz" className="flex items-center gap-3 p-5 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition text-lg font-semibold sm:col-span-2 justify-center">
                    <span className="text-2xl">&#x1F3AF;</span> &#x95EF;&#x5173;&#x7EC3;&#x4E60;
                </Link>
            </div>
        </div>
    );
};

export default HomePage;