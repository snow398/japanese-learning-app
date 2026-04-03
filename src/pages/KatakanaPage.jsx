import React from 'react';
import { useEffect } from 'react';
import { katakanaData } from '../data/katakana';
import { speak } from '../utils/speech';

const KatakanaPage = () => {
    useEffect(() => {
        // Optionally, you can add any side effects here
    }, []);

    const handlePlayAudio = (text) => {
        speak(text);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Katakana Learning</h1>
            <p className="mb-4">Learn the Katakana characters and their pronunciations.</p>
            <div className="grid grid-cols-2 gap-4">
                {katakanaData.map((item) => (
                    <div key={item.char} className="border p-4 rounded shadow hover:bg-gray-100">
                        <h2 className="text-2xl">{item.char}</h2>
                        <button
                            onClick={() => handlePlayAudio(item.sound)}
                            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
                        >
                            Play Sound
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KatakanaPage;