import React, { useState } from 'react';

const QuizCard = ({ question, options, correctAnswer, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);
        onAnswer(option === correctAnswer);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">{question}</h2>
            <div className="flex flex-col">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`p-2 rounded-lg mb-2 transition-colors duration-200 ${
                            isAnswered
                                ? option === correctAnswer
                                    ? 'bg-green-500 text-white'
                                    : selectedOption === option
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-200'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                        disabled={isAnswered}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isAnswered && (
                <div className="mt-2 text-sm">
                    {selectedOption === correctAnswer ? (
                        <span className="text-green-600">Correct!</span>
                    ) : (
                        <span className="text-red-600">Incorrect. The correct answer is: {correctAnswer}</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizCard;