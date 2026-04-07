import React, { useState } from 'react';
import vocabulary from '../data/vocabulary';
import { speak } from '../utils/speech';

const VocabularyPage = () => {
  const [activeChapter, setActiveChapter] = useState(vocabulary[0].chapter);
  const [flipped, setFlipped] = useState({});

  const currentChapter = vocabulary.find(c => c.chapter === activeChapter);

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChapterChange = (chapter) => {
    setActiveChapter(chapter);
    setFlipped({});
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">单词背诵</h1>
      <p className="text-gray-500 text-sm mb-5">新版标准日本语（初级）· 点击卡片翻面查看释义 · 🔊 支持朗读</p>

      {/* 章节选择 */}
      <div className="flex gap-2 flex-wrap mb-6">
        {vocabulary.map(ch => (
          <button
            key={ch.chapter}
            onClick={() => handleChapterChange(ch.chapter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeChapter === ch.chapter
                ? 'bg-blue-500 text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            第{ch.chapter}课
          </button>
        ))}
      </div>

      {/* 章节标题 */}
      <div className="text-base font-semibold text-blue-700 mb-4 border-l-4 border-blue-500 pl-3">
        {currentChapter.chapterTitle}
      </div>

      {/* 单词卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentChapter.words.map(item => (
          <div
            key={item.id}
            className="border rounded-xl shadow-sm bg-white flex flex-col overflow-hidden"
          >
            {/* 卡片正面/背面 */}
            <div
              onClick={() => toggleFlip(item.id)}
              className="cursor-pointer flex-1 p-5 min-h-[130px] flex flex-col justify-center hover:bg-gray-50 transition-colors"
            >
              {!flipped[item.id] ? (
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="text-3xl font-bold">{item.word}</span>
                  <span className="text-sm text-gray-400">{item.kana}</span>
                  <span className="text-xs text-gray-400">{item.romaji}</span>
                  <span className="text-xs text-gray-300 mt-2">点击查看释义 →</span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">{item.meaning}</span>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">{item.example}</div>
                  <div className="text-xs text-gray-400">{item.exampleMeaning}</div>
                </div>
              )}
            </div>

            {/* 朗读按钮区 */}
            <div className="border-t flex divide-x">
              <button
                onClick={(e) => { e.stopPropagation(); speak(item.word); }}
                className="flex-1 py-2 text-xs text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center gap-1"
              >
                🔊 单词
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); speak(item.example, 0.85); }}
                className="flex-1 py-2 text-xs text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center justify-center gap-1"
              >
                🔊 例句
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyPage;
