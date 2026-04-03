# Japanese Learning Web Application

Welcome to the Japanese Learning Web Application! This project is designed to help users learn the Japanese language through various interactive features, including Hiragana and Katakana lessons, vocabulary memorization, grammar learning, and quiz exercises. The application utilizes React and Vite for a modern web development experience, and Tailwind CSS for styling.

## Features

- **Hiragana and Katakana Lessons**: Interactive lessons to help users learn and memorize the two phonetic scripts of the Japanese language.
- **Vocabulary Memorization**: A dedicated section for learning and practicing essential Japanese vocabulary.
- **Grammar Learning**: Resources and exercises to understand Japanese grammar rules.
- **Quiz Exercises**: Fun quizzes to test knowledge and reinforce learning.
- **Voice Playback**: Utilizes the Web Speech API to provide audio playback for pronunciation practice.

## Project Structure

```
japanese-learning-app
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── QuizCard.jsx
│   ├── data
│   │   ├── grammar.js
│   │   ├── hiragana.js
│   │   ├── katakana.js
│   │   └── vocabulary.js
│   ├── pages
│   │   ├── GrammarPage.jsx
│   │   ├── HiraganaPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── KatakanaPage.jsx
│   │   ├── QuizPage.jsx
│   │   └── VocabularyPage.jsx
│   ├── utils
│   │   └── speech.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

To get started with the Japanese Learning Web Application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd japanese-learning-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Web Speech API**: For voice playback functionality.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.