import React from 'react';
import { useEffect } from 'react';
import { hiraganaData } from '../data/hiragana';
import { speak } from '../utils/speech';

const HiraganaPage = () => {
    useEffect(() => {
        // Optionally, you can add any side effects here
    }, []);

    const handleSpeak = (character) => {
        speak(character);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Learn Hiragana</h1>
            <div className="grid grid-cols-2 gap-4">
                {hiraganaData.map((item) => (
                    <div key={item.character} className="border p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl">{item.character}</h2>
                        <p className="text-lg">{item.romaji}</p>
                        <button 
                            onClick={() => handleSpeak(item.character)} 
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                        >
                            Hear Pronunciation
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiraganaPage;