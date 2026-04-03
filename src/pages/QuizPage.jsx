import React, { useState } from 'react';
import QuizCard from '../components/QuizCard';
import { vocabulary } from '../data/vocabulary';

const QuizPage = () => {
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < vocabulary.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setIsQuizFinished(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Vocabulary Quiz</h1>
            {isQuizFinished ? (
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Quiz Finished!</h2>
                    <p className="mb-4">Your score: {score} out of {vocabulary.length}</p>
                    <button 
                        onClick={restartQuiz} 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Restart Quiz
                    </button>
                </div>
            ) : (
                <QuizCard 
                    question={vocabulary[currentQuestionIndex]} 
                    onAnswer={handleAnswer} 
                />
            )}
        </div>
    );
};

export default QuizPage;