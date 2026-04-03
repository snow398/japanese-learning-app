import React from 'react';
import katakanaData from '../data/katakana';
import { speak } from '../utils/speech';

const KatakanaPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">カタカナ · 片假名</h1>
            <p className="text-gray-500 mb-6">点击卡片或按钮收听发音</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {katakanaData.map((item) => (
                    <div
                        key={item.character}
                        onClick={() => speak(item.character)}
                        className="border rounded-xl p-4 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-colors shadow-sm"
                    >
                        <div className="text-3xl font-bold">{item.character}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.pronunciation}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KatakanaPage;