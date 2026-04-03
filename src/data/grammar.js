const grammarData = [
    {
        id: 1,
        topic: "Particles",
        description: "Particles are small words that indicate the grammatical function of a word in a sentence.",
        examples: [
            { sentence: "私は学生です。", translation: "I am a student." },
            { sentence: "本を読みます。", translation: "I read a book." }
        ]
    },
    {
        id: 2,
        topic: "Verb Conjugation",
        description: "Japanese verbs can be conjugated to express different tenses and moods.",
        examples: [
            { sentence: "食べる (taberu) - to eat", translation: "Present" },
            { sentence: "食べました (tabemashita) - ate", translation: "Past" }
        ]
    },
    {
        id: 3,
        topic: "Adjective Conjugation",
        description: "Adjectives in Japanese can also be conjugated to express different tenses.",
        examples: [
            { sentence: "高い (takai) - high", translation: "Present" },
            { sentence: "高かった (takakatta) - was high", translation: "Past" }
        ]
    },
    {
        id: 4,
        topic: "Sentence Structure",
        description: "The basic sentence structure in Japanese is Subject-Object-Verb (SOV).",
        examples: [
            { sentence: "私はリンゴを食べます。", translation: "I eat an apple." },
            { sentence: "彼は本を読みます。", translation: "He reads a book." }
        ]
    }
];

export default grammarData;