
import Link from 'next/link';

interface ReaderHeaderProps {
  chapter: {
    title: string;
    number: number;
    totalChapters: number;
    author: {
      name: string;
      id: string;
    };
  };
  storyId: string;
  readProgress: number;
  toggleSettings: () => void;
  toggleComments: () => void;
}

export default function ReaderHeader({
  chapter,
  storyId,
  readProgress,
  toggleSettings,
  toggleComments
}: ReaderHeaderProps) {
  const prevChapter = chapter.number > 1 ? chapter.number - 1 : null;
  const nextChapter = chapter.number < chapter.totalChapters ? chapter.number + 1 : null;

  return (
    <header className="reader-header sticky top-0 z-20 w-full glass-effect backdrop-blur-lg border-b border-border-subtle">
      {/* Progress bar */}
      <div className="progress-bar w-full h-1 bg-elevated">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
          style={{ width: `${readProgress}%` }}
        ></div>
      </div>
      
      <div className="reader-header-content py-3 px-4 flex items-center justify-between">
        {/* Left side - Back button & chapter navigation */}
        <div className="flex items-center gap-3">
          <Link 
            href={`/story/${storyId}`} 
            className="btn-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated/50 text-text-secondary hover:bg-elevated hover:text-text-primary transition-all duration-300"
          >
            <i className="fas fa-arrow-left"></i>
          </Link>
          
          <div className="chapter-navigation flex items-center">
            {prevChapter ? (
              <Link 
                href={`/story/${storyId}/chapter/${prevChapter}`}
                className="p-2 text-text-secondary hover:text-primary-light transition-colors duration-300"
              >
                <i className="fas fa-chevron-left"></i>
              </Link>
            ) : (
              <button className="p-2 text-text-muted cursor-not-allowed opacity-50">
                <i className="fas fa-chevron-left"></i>
              </button>
            )}
            
            <span className="text-sm font-medium px-2">
              Chapter {chapter.number} of {chapter.totalChapters}
            </span>
            
            {nextChapter ? (
              <Link 
                href={`/story/${storyId}/chapter/${nextChapter}`}
                className="p-2 text-text-secondary hover:text-primary-light transition-colors duration-300"
              >
                <i className="fas fa-chevron-right"></i>
              </Link>
            ) : (
              <button className="p-2 text-text-muted cursor-not-allowed opacity-50">
                <i className="fas fa-chevron-right"></i>
              </button>
            )}
          </div>
        </div>
        
        {/* Right side - Actions */}
        <div className="reader-actions flex items-center gap-2">
          <button 
            onClick={toggleComments}
            className="btn-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated/50 text-text-secondary hover:bg-elevated hover:text-text-primary transition-all duration-300"
            aria-label="View comments"
          >
            <i className="fas fa-comment"></i>
          </button>
          
          <button 
            onClick={toggleSettings}
            className="btn-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated/50 text-text-secondary hover:bg-elevated hover:text-text-primary transition-all duration-300"
            aria-label="Reading settings"
          >
            <i className="fas fa-font"></i>
          </button>
          
          <button 
            className="btn-icon flex items-center justify-center w-9 h-9 rounded-full bg-elevated/50 text-text-secondary hover:bg-elevated hover:text-text-primary transition-all duration-300"
            aria-label="Bookmark chapter"
          >
            <i className="far fa-bookmark"></i>
          </button>
        </div>
      </div>
      
      {/* Chapter title */}
      <div className="chapter-info py-3 px-4 bg-elevated/30">
        <h1 className="chapter-title text-lg font-semibold">{chapter.title}</h1>
        <div className="chapter-meta text-text-tertiary text-sm mt-1">
          By{' '}
          <Link 
            href={`/profile/${chapter.author.id}`}
            className="text-primary-light hover:text-primary transition-colors duration-300"
          >
            {chapter.author.name}
          </Link>
        </div>
      </div>
    </header>
  );
}