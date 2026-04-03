import React, { useState } from 'react';
import vocabularyData from '../data/vocabulary';
import { speak } from '../utils/speech';

const VocabularyPage = () => {
    const [flipped, setFlipped] = useState({});

    const toggleFlip = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">単語背誦 · 单词背诵</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {vocabularyData.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggleFlip(item.id)}
                        className="cursor-pointer border rounded-xl shadow-md p-5 bg-white hover:shadow-lg transition-shadow min-h-[140px] flex flex-col justify-between"
                    >
                        {!flipped[item.id] ? (
                            <div className="flex flex-col items-center justify-center flex-1 gap-1">
                                <span className="text-4xl font-bold">{item.word}</span>
                                <span className="text-gray-400 text-sm">{item.romaji}</span>
                                <span className="text-xs text-gray-400 mt-2">点击翻面查看释义</span>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2 flex-1">
                                <p className="text-xl font-semibold text-blue-600">{item.meaning}</p>
                                <p className="text-sm text-gray-600">{item.example}</p>
                            </div>
                        )}
                        <button
                            onClick={(e) => { e.stopPropagation(); speak(item.word); }}
                            className="mt-3 text-xs bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 self-end"
                        >
                            🔊 朗读
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VocabularyPage;