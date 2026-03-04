import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface OutputCardProps {
  label: string;
  text: string;
  className?: string;
}

export function OutputCard({ label, text, className = "" }: OutputCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{label}</span>
        <button
          onClick={handleCopy}
          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
        </button>
      </div>
      <div className={`text-lg text-zinc-900 dark:text-zinc-100 font-medium break-words min-h-[1.75rem] ${className}`}>
        {text || <span className="text-zinc-300 dark:text-zinc-700 italic">Type something...</span>}
      </div>
    </motion.div>
  );
}
