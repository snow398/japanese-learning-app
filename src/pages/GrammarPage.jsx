import React, { useState } from 'react';
import grammarData from '../data/grammar';
import { speak } from '../utils/speech';

// 提取所有章节（去重）
const chapters = [...new Map(grammarData.map(g => [g.chapter, g.chapterTitle])).entries()]
  .map(([chapter, chapterTitle]) => ({ chapter, chapterTitle }));

const GrammarPage = () => {
  const [activeChapter, setActiveChapter] = useState(null); // null = 全部
  const [openId, setOpenId] = useState(null);

  const filtered = activeChapter === null
    ? grammarData
    : grammarData.filter(g => g.chapter === activeChapter);

  const handleChapter = (ch) => {
    setActiveChapter(ch);
    setOpenId(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">语法学习</h1>
      <p className="text-gray-500 text-sm mb-5">新版标准日本语（初级）· 点击展开语法详解 · 🔊 例句可朗读</p>

      {/* 章节筛选 */}
      <div className="flex gap-2 flex-wrap mb-6">
        <button
          onClick={() => handleChapter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeChapter === null ? 'bg-blue-500 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {chapters.map(({ chapter, chapterTitle }) => (
          <button
            key={chapter}
            onClick={() => handleChapter(chapter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeChapter === chapter ? 'bg-blue-500 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            第{chapter}课
          </button>
        ))}
      </div>

      {/* 语法列表 */}
      <div className="flex flex-col gap-3">
        {filtered.map((item) => (
          <div key={item.id} className="border rounded-xl shadow-sm overflow-hidden bg-white">
            <button
              className="w-full text-left p-4 flex justify-between items-start gap-3 hover:bg-gray-50 transition-colors"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                    {item.chapterTitle}
                  </span>
                </div>
                <span className="font-semibold text-gray-800">{item.topic}</span>
                <span className="text-xs text-gray-400 font-mono">{item.pattern}</span>
              </div>
              <span className="text-gray-400 text-sm mt-1 flex-shrink-0">
                {openId === item.id ? '▲' : '▼'}
              </span>
            </button>

            {openId === item.id && (
              <div className="px-4 pb-4 border-t bg-gray-50">
                <p className="text-gray-600 text-sm leading-relaxed py-3">{item.description}</p>
                <div className="flex flex-col gap-2">
                  {item.examples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white border rounded-lg p-3">
                      <div className="flex-1">
                        <div className="text-base text-gray-800">{ex.sentence}</div>
                        <div className="text-sm text-blue-600 mt-0.5">{ex.translation}</div>
                      </div>
                      <button
                        onClick={() => speak(ex.sentence, 0.85)}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm"
                      >
                        🔊
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrammarPage;
