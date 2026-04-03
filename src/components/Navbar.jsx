import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">🌸 日语学习</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline">首页</Link>
                    </li>
                    <li>
                        <Link to="/hiragana" className="text-white hover:underline">平假名</Link>
                    </li>
                    <li>
                        <Link to="/katakana" className="text-white hover:underline">片假名</Link>
                    </li>
                    <li>
                        <Link to="/vocabulary" className="text-white hover:underline">单词背诵</Link>
                    </li>
                    <li>
                        <Link to="/grammar" className="text-white hover:underline">语法学习</Link>
                    </li>
                    <li>
                        <Link to="/quiz" className="text-white hover:underline">闯关练习</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;