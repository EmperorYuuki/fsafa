
'use client';

import { useState } from 'react';

interface ChapterContentProps {
  chapter: {
    content: string[];
  };
  font: string;
  fontSize: string;
  lineSpacing: string;
  onParagraphSelect: (index: number) => void;
}

export default function ChapterContent({
  chapter,
  font,
  fontSize,
  lineSpacing,
  onParagraphSelect
}: ChapterContentProps) {
  const [hoveredParagraph, setHoveredParagraph] = useState<number | null>(null);

  return (
    <div className={`chapter-content ${font} ${fontSize} ${lineSpacing}`}>
      {chapter.content.map((paragraph, index) => (
        <div
          key={index}
          className="paragraph relative mb-6 group"
          onMouseEnter={() => setHoveredParagraph(index)}
          onMouseLeave={() => setHoveredParagraph(null)}
        >
          <p>{paragraph}</p>
          
          {/* Comment button that appears on hover */}
          <button 
            className={`comment-btn absolute -left-12 top-0 w-8 h-8 flex items-center justify-center rounded-full text-sm bg-surface opacity-0 transition-opacity duration-200 text-text-tertiary hover:text-primary-light ${
              hoveredParagraph === index ? 'opacity-100' : ''
            }`}
            onClick={() => onParagraphSelect(index)}
            aria-label="Comment on paragraph"
          >
            <i className="far fa-comment"></i>
          </button>
        </div>
      ))}
    </div>
  );
}