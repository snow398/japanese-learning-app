import React, { useState } from 'react';
import grammarData from '../data/grammar';
import { speak } from '../utils/speech';

const GrammarPage = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">语法学习</h1>
            <div className="flex flex-col gap-4">
                {grammarData.map((item) => (
                    <div key={item.id} className="border rounded-lg shadow-sm overflow-hidden">
                        <button
                            className="w-full text-left p-4 bg-white font-semibold flex justify-between items-center hover:bg-gray-50"
                            onClick={() => setOpenId(openId === item.id ? null : item.id)}
                        >
                            <span>{item.topic}</span>
                            <span className="text-gray-400">{openId === item.id ? '▲' : '▼'}</span>
                        </button>
                        {openId === item.id && (
                            <div className="p-4 bg-gray-50 border-t">
                                <p className="mb-3 text-gray-600">{item.description}</p>
                                <ul className="flex flex-col gap-2">
                                    {item.examples.map((ex, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="flex-1">{ex.sentence} — {ex.translation}</span>
                                            <button
                                                onClick={() => speak(ex.sentence)}
                                                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                            >
                                                🔊
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrammarPage;