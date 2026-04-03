import React from 'react';
import Layout from '../components/Layout';
import { grammarData } from '../data/grammar';
import { useSpeechSynthesis } from '../utils/speech';

const GrammarPage = () => {
    const { speak } = useSpeechSynthesis();

    const handleSpeak = (text) => {
        speak(text);
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Grammar Learning</h1>
                <p className="mb-4">Explore various grammar rules and examples.</p>
                <ul className="list-disc pl-5">
                    {grammarData.map((item, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-semibold">{item.rule}</span>: {item.description}
                            <button
                                onClick={() => handleSpeak(item.rule)}
                                className="ml-2 text-blue-500 underline"
                            >
                                Listen
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default GrammarPage;