import React, { useEffect } from 'react';
import hiraganaData from '../data/hiragana';
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
            <h1 className="text-3xl font-bold mb-2">ひらがな · 平假名</h1>
            <p className="text-gray-500 mb-6">点击卡片收听发音</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {hiraganaData.map((item) => (
                    <div
                        key={item.character}
                        onClick={() => handleSpeak(item.character)}
                        className="border rounded-xl p-4 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-colors shadow-sm"
                    >
                        <div className="text-3xl font-bold">{item.character}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.romaji}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiraganaPage;