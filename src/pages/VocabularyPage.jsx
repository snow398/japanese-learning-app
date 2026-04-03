import React from 'react';
import vocabularyData from '../data/vocabulary';
import { useSpeechSynthesis } from '../utils/speech';

const VocabularyPage = () => {
    const { speak } = useSpeechSynthesis();

    const handleSpeak = (word) => {
        speak(word);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vocabulary Learning</h1>
            <ul className="list-disc pl-5">
                {vocabularyData.map((item, index) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{item.word} - {item.translation}</span>
                        <button 
                            onClick={() => handleSpeak(item.word)} 
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                            Speak
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VocabularyPage;