import React, { useState } from 'react';
import QuizCard from '../components/QuizCard';
import vocabularyChapters from '../data/vocabulary';
import { speak } from '../utils/speech';

const QUIZ_LENGTH = 5;

// 将所有章节单词合并为扁平数组
const allWords = vocabularyChapters.flatMap(ch => ch.words);

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuestions(words) {
    const pool = shuffle(words).slice(0, QUIZ_LENGTH);
    return pool.map((item) => {
        const wrongs = shuffle(words.filter(w => w.id !== item.id)).slice(0, 3).map(w => w.meaning);
        const options = shuffle([item.meaning, ...wrongs]);
        return {
            question: item.word,
            romaji: item.kana,
            example: item.example,
            correctAnswer: item.meaning,
            options,
        };
    });
}

const QuizPage = () => {
    const [questions, setQuestions] = useState(() => buildQuestions(allWords));
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const current = questions[currentIndex];

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(s => s + 1);
        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(i => i + 1);
            } else {
                setIsFinished(true);
            }
        }, 900);
    };

    const restart = () => {
        setQuestions(buildQuestions(allWords));
        setScore(0);
        setCurrentIndex(0);
        setIsFinished(false);
    };

    return (
        <div className="container mx-auto p-4 max-w-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">闯关练习</h1>
            {isFinished ? (
                <div className="text-center border rounded-lg p-8 bg-white shadow">
                    <div className="text-5xl mb-4">{score >= 4 ? '🎉' : score >= 2 ? '👍' : '💪'}</div>
                    <h2 className="text-2xl font-bold mb-2">测验完成！</h2>
                    <p className="text-gray-600 mb-6">得分：<span className="text-3xl font-bold text-blue-500">{score}</span> / {questions.length}</p>
                    <button onClick={restart} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        再挺战一次
                    </button>
                </div>
            ) : (
                <>
                    <div className="text-sm text-gray-500 mb-2 text-right">第 {currentIndex + 1} / {questions.length} 题</div>
                    <div className="w-full bg-gray-200 rounded h-2 mb-4">
                        <div
                            className="bg-blue-500 h-2 rounded transition-all"
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                    <QuizCard
                        key={currentIndex}
                        question={current.question}
                        options={current.options}
                        correctAnswer={current.correctAnswer}
                        onAnswer={handleAnswer}
                    />
                    <button
                        onClick={() => speak(current.question)}
                        className="mt-3 text-sm w-full text-center text-blue-500 hover:underline"
                    >
                        🔊 播放发音
                    </button>
                </>
            )}
        </div>
    );
};

export default QuizPage;