
interface StatsCardsProps {
    stats: {
      currentlyReading: number;
      completedStories: number;
      readingTime: string;
      bookmarked: number;
    };
  }
  
  export default function StatsCards({
    stats = {
      currentlyReading: 12,
      completedStories: 87,
      readingTime: '142h',
      bookmarked: 34,
    },
  }: Partial<StatsCardsProps>) {
    return (
      <div className="stats-container grid grid-cols-4 gap-4 mb-8 lg:grid-cols-2 sm:grid-cols-1">
        <div className="stat-card bg-surface rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 border border-border-subtle hover:-translate-y-1 hover:border-border-distinct hover:shadow-md sm:flex-row sm:items-center sm:text-left sm:py-3 sm:px-4">
          <div className="stat-icon w-12 h-12 flex items-center justify-center mb-3 rounded-full text-xl text-white bg-gradient-to-br from-primary to-secondary sm:mb-0 sm:mr-3 sm:w-10 sm:h-10 sm:text-base">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-content sm:flex sm:flex-col">
            <div className="stat-value text-2xl font-bold font-heading mb-1 sm:text-xl sm:mb-0">
              {stats.currentlyReading}
            </div>
            <div className="stat-label text-text-tertiary text-sm font-medium sm:text-xs">
              Currently Reading
            </div>
          </div>
        </div>
  
        <div className="stat-card bg-surface rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 border border-border-subtle hover:-translate-y-1 hover:border-border-distinct hover:shadow-md sm:flex-row sm:items-center sm:text-left sm:py-3 sm:px-4">
          <div className="stat-icon w-12 h-12 flex items-center justify-center mb-3 rounded-full text-xl text-white bg-gradient-to-br from-primary to-secondary sm:mb-0 sm:mr-3 sm:w-10 sm:h-10 sm:text-base">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content sm:flex sm:flex-col">
            <div className="stat-value text-2xl font-bold font-heading mb-1 sm:text-xl sm:mb-0">
              {stats.completedStories}
            </div>
            <div className="stat-label text-text-tertiary text-sm font-medium sm:text-xs">
              Completed Stories
            </div>
          </div>
        </div>
  
        <div className="stat-card bg-surface rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 border border-border-subtle hover:-translate-y-1 hover:border-border-distinct hover:shadow-md sm:flex-row sm:items-center sm:text-left sm:py-3 sm:px-4">
          <div className="stat-icon w-12 h-12 flex items-center justify-center mb-3 rounded-full text-xl text-white bg-gradient-to-br from-primary to-secondary sm:mb-0 sm:mr-3 sm:w-10 sm:h-10 sm:text-base">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content sm:flex sm:flex-col">
            <div className="stat-value text-2xl font-bold font-heading mb-1 sm:text-xl sm:mb-0">
              {stats.readingTime}
            </div>
            <div className="stat-label text-text-tertiary text-sm font-medium sm:text-xs">
              Reading Time
            </div>
          </div>
        </div>
  
        <div className="stat-card bg-surface rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 border border-border-subtle hover:-translate-y-1 hover:border-border-distinct hover:shadow-md sm:flex-row sm:items-center sm:text-left sm:py-3 sm:px-4">
          <div className="stat-icon w-12 h-12 flex items-center justify-center mb-3 rounded-full text-xl text-white bg-gradient-to-br from-primary to-secondary sm:mb-0 sm:mr-3 sm:w-10 sm:h-10 sm:text-base">
            <i className="fas fa-bookmark"></i>
          </div>
          <div className="stat-content sm:flex sm:flex-col">
            <div className="stat-value text-2xl font-bold font-heading mb-1 sm:text-xl sm:mb-0">
              {stats.bookmarked}
            </div>
            <div className="stat-label text-text-tertiary text-sm font-medium sm:text-xs">
              Bookmarked
            </div>
          </div>
        </div>
      </div>
    );
  }