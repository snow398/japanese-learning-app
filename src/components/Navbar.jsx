import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Japanese Learning App</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/hiragana" className="text-white hover:underline">Hiragana</Link>
                    </li>
                    <li>
                        <Link to="/katakana" className="text-white hover:underline">Katakana</Link>
                    </li>
                    <li>
                        <Link to="/vocabulary" className="text-white hover:underline">Vocabulary</Link>
                    </li>
                    <li>
                        <Link to="/grammar" className="text-white hover:underline">Grammar</Link>
                    </li>
                    <li>
                        <Link to="/quiz" className="text-white hover:underline">Quiz</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;