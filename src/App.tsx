/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { convertText, availableStyles } from './utils/unicodeStyles';
import { OutputCard } from './components/OutputCard';
import { Type } from 'lucide-react';

export default function App() {
  const [inputText, setInputText] = useState('Hello World');
  const [zalgoIntensity, setZalgoIntensity] = useState(5);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 mb-4">
            <Type className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-white">
            Unicode Text Converter
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Type your text below to instantly generate copy-pasteable styled text for social media, bios, and more.
          </p>
        </header>

        {/* Input Section */}
        <div className="mb-8 sticky top-4 z-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-200 blur"></div>
            <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-xl">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your text here..."
                className="w-full p-6 bg-transparent border-none focus:ring-0 text-xl md:text-2xl font-medium placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-y min-h-[120px] rounded-xl"
                autoFocus
              />
              <div className="absolute bottom-3 right-4 text-xs text-zinc-400 font-mono">
                {inputText.length} chars
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableStyles.filter(s => s.id !== 'zalgo').map((style) => (
            <OutputCard
              key={style.id}
              label={style.name}
              text={convertText(inputText, style.id)}
            />
          ))}
          
          {/* Zalgo Full Width */}
          {availableStyles.filter(s => s.id === 'zalgo').map((style) => (
            <div key={style.id} className="md:col-span-2 relative">
              <OutputCard
                label={style.name}
                text={convertText(inputText, style.id, zalgoIntensity)}
                className="text-center"
              />
              <div className="absolute top-4 right-14 flex items-center gap-2">
                 <span className="text-[10px] uppercase tracking-wider font-medium text-zinc-400">Chaos</span>
                 <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={zalgoIntensity}
                    onChange={(e) => setZalgoIntensity(Number(e.target.value))}
                    className="w-24 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-400"
                 />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-zinc-400 dark:text-zinc-600">
          <p>Click the copy icon to copy the text to your clipboard.</p>
        </footer>
      </div>
    </div>
  );
}

