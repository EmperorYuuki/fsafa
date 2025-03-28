
'use client';

import { useState, useEffect } from 'react';
import ReaderHeader from './ReaderHeader';
import ChapterContent from './ChapterContent';
import ReadingSettingsPanel from './ReadingSettingsPanel';
import CommentSection from './CommentSection';

// Font family options
const fontOptions = [
  { id: 'sans', name: 'Sans Serif', value: 'font-sans' },
  { id: 'serif', name: 'Serif', value: 'font-serif' },
  { id: 'mono', name: 'Monospace', value: 'font-mono' }
];

// Font size options
const fontSizeOptions = [
  { id: 'sm', name: 'Small', value: 'text-sm' },
  { id: 'base', name: 'Medium', value: 'text-base' },
  { id: 'lg', name: 'Large', value: 'text-lg' },
  { id: 'xl', name: 'Extra Large', value: 'text-xl' }
];

// Theme options
const themeOptions = [
  { id: 'dark', name: 'Dark', 
    value: {
      background: 'bg-background',
      text: 'text-text-primary'
    }
  },
  { id: 'light', name: 'Light', 
    value: {
      background: 'bg-slate-50',
      text: 'text-slate-900'
    }
  },
  { id: 'sepia', name: 'Sepia', 
    value: {
      background: 'bg-amber-50',
      text: 'text-amber-900'
    }
  }
];

// Line spacing options
const lineSpacingOptions = [
  { id: 'tight', name: 'Tight', value: 'leading-tight' },
  { id: 'normal', name: 'Normal', value: 'leading-normal' },
  { id: 'relaxed', name: 'Relaxed', value: 'leading-relaxed' },
  { id: 'loose', name: 'Loose', value: 'leading-loose' }
];

interface ReaderProps {
  storyId: string;
  chapterId: string;
  chapter: {
    title: string;
    content: string[];
    number: number;
    totalChapters: number;
    author: {
      name: string;
      id: string;
    };
    wordCount: number;
    publishedAt: string;
  };
}

export default function Reader({ storyId, chapterId, chapter }: ReaderProps) {
  // State for reading settings
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [selectedParagraph, setSelectedParagraph] = useState<number | null>(null);
  
  // Reading preferences state
  const [font, setFont] = useState(fontOptions[0]);
  const [fontSize, setFontSize] = useState(fontSizeOptions[1]); // Medium font by default
  const [theme, setTheme] = useState(themeOptions[0]); // Dark theme by default
  const [lineSpacing, setLineSpacing] = useState(lineSpacingOptions[1]); // Normal line spacing by default
  
  // Read progress
  const [readProgress, setReadProgress] = useState(0);
  
  // Load saved reading preferences from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFont = localStorage.getItem('reader-font');
      const savedFontSize = localStorage.getItem('reader-font-size');
      const savedTheme = localStorage.getItem('reader-theme');
      const savedLineSpacing = localStorage.getItem('reader-line-spacing');
      
      if (savedFont) {
        const foundFont = fontOptions.find(f => f.id === savedFont);
        if (foundFont) setFont(foundFont);
      }
      
      if (savedFontSize) {
        const foundFontSize = fontSizeOptions.find(f => f.id === savedFontSize);
        if (foundFontSize) setFontSize(foundFontSize);
      }
      
      if (savedTheme) {
        const foundTheme = themeOptions.find(t => t.id === savedTheme);
        if (foundTheme) setTheme(foundTheme);
      }
      
      if (savedLineSpacing) {
        const foundLineSpacing = lineSpacingOptions.find(l => l.id === savedLineSpacing);
        if (foundLineSpacing) setLineSpacing(foundLineSpacing);
      }
    }
  }, []);
  
  // Save reading preferences when they change
  useEffect(() => {
    localStorage.setItem('reader-font', font.id);
    localStorage.setItem('reader-font-size', fontSize.id);
    localStorage.setItem('reader-theme', theme.id);
    localStorage.setItem('reader-line-spacing', lineSpacing.id);
  }, [font, fontSize, theme, lineSpacing]);
  
  // Handle scroll to update reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setReadProgress(Math.min(Math.round(scrollPercent * 100), 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle settings panel
  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    if (commentsOpen) setCommentsOpen(false);
  };
  
  // Toggle comments panel
  const toggleComments = (paragraphIndex?: number) => {
    if (paragraphIndex !== undefined) {
      setSelectedParagraph(paragraphIndex);
      setCommentsOpen(true);
    } else {
      setCommentsOpen(!commentsOpen);
    }
    
    if (settingsOpen) setSettingsOpen(false);
  };
  
  // Handle paragraph selection for comments
  const handleParagraphSelect = (index: number) => {
    setSelectedParagraph(index);
    setCommentsOpen(true);
  };
  
  return (
    <div className={`reader-container min-h-screen ${theme.value.background} ${theme.value.text} transition-colors duration-300`}>
      <ReaderHeader 
        chapter={chapter}
        storyId={storyId}
        readProgress={readProgress}
        toggleSettings={toggleSettings}
        toggleComments={toggleComments}
      />
      
      <div className="reader-content mx-auto max-w-3xl px-4 py-8">
        <ChapterContent
          chapter={chapter}
          font={font.value}
          fontSize={fontSize.value}
          lineSpacing={lineSpacing.value}
          onParagraphSelect={handleParagraphSelect}
        />
      </div>
      
      {/* Reading Settings Panel */}
      <ReadingSettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        fontOptions={fontOptions}
        selectedFont={font}
        onFontChange={setFont}
        fontSizeOptions={fontSizeOptions}
        selectedFontSize={fontSize}
        onFontSizeChange={setFontSize}
        themeOptions={themeOptions}
        selectedTheme={theme}
        onThemeChange={setTheme}
        lineSpacingOptions={lineSpacingOptions}
        selectedLineSpacing={lineSpacing}
        onLineSpacingChange={setLineSpacing}
      />
      
      {/* Comments Panel */}
      <CommentSection
        isOpen={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        paragraphIndex={selectedParagraph}
        storyId={storyId}
        chapterId={chapterId}
      />
    </div>
  );
}