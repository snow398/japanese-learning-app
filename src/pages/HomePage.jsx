import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center bg-gray-100 min-h-screen">
            <div className="text-6xl mb-4">🌸</div>
            <h1 className="text-4xl font-bold mb-3">日语学习应用</h1>
            <p className="text-gray-500 text-lg mb-10">学习平假名・片假名・单词・语法，轻松开始日语之旅！</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                <Link to="/hiragana" className="flex items-center gap-3 p-5 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-lg font-semibold">
                    <span className="text-2xl">🈳</span> 平假名学习
                </Link>
                <Link to="/katakana" className="flex items-center gap-3 p-5 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition text-lg font-semibold">
                    <span className="text-2xl">🔤</span> 片假名学习
                </Link>
                <Link to="/vocabulary" className="flex items-center gap-3 p-5 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold">
                    <span className="text-2xl">📚</span> 单词背诵
                </Link>
                <Link to="/grammar" className="flex items-center gap-3 p-5 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition text-lg font-semibold">
                    <span className="text-2xl">📖</span> 语法学习
                </Link>
                <Link to="/quiz" className="flex items-center gap-3 p-5 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition text-lg font-semibold sm:col-span-2 justify-center">
                    <span className="text-2xl">🎯</span> 闯关练习
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
                <div className="text-6xl mb-4">🌸</div>
                <h1 className="text-4xl font-bold mb-3">日语学习应用</h1>
                <p className="text-gray-500 text-lg mb-10">学习平假名・片假名・单词・语法，轻松开始日语之旅！</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                    <Link to="/hiragana" className="flex items-center gap-3 p-5 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition text-lg font-semibold">
                        <span className="text-2xl">🈳</span> 平假名学习
                    </Link>
                    <Link to="/katakana" className="flex items-center gap-3 p-5 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition text-lg font-semibold">
                        <span className="text-2xl">🔤</span> 片假名学习
                    </Link>
                    <Link to="/vocabulary" className="flex items-center gap-3 p-5 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold">
                        <span className="text-2xl">📚</span> 单词背诵
                    </Link>
                    <Link to="/grammar" className="flex items-center gap-3 p-5 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition text-lg font-semibold">
                        <span className="text-2xl">📖</span> 语法学习
                    </Link>
                    <Link to="/quiz" className="flex items-center gap-3 p-5 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition text-lg font-semibold sm:col-span-2 justify-center">
                        <span className="text-2xl">🎯</span> 闯关练习
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;