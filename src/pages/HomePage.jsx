import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Welcome to the Japanese Learning App</h1>
            <p className="text-lg mb-8">Learn Hiragana, Katakana, Vocabulary, and Grammar with fun quizzes!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/hiragana" className="p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">
                    Learn Hiragana
                </Link>
                <Link to="/katakana" className="p-4 bg-green-500 text-white rounded shadow hover:bg-green-600 transition">
                    Learn Katakana
                </Link>
                <Link to="/vocabulary" className="p-4 bg-purple-500 text-white rounded shadow hover:bg-purple-600 transition">
                    Vocabulary Memorization
                </Link>
                <Link to="/grammar" className="p-4 bg-red-500 text-white rounded shadow hover:bg-red-600 transition">
                    Grammar Learning
                </Link>
                <Link to="/quiz" className="p-4 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition">
                    Take a Quiz
                </Link>
            </div>
        </div>
    );
};

export default HomePage;