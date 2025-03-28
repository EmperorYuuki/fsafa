
import Link from 'next/link';
import Categories from '@/components/discover/Categories';
import FeaturedBanner from '@/components/discover/FeaturedBanner';
import StatsCards from '@/components/discover/StatsCards';
import StoryCard from '@/components/discover/StoryCard';
import Footer from '@/components/layout/Footer';

// Mock data for stories
const topStories = [
  {
    id: 'story-1',
    title: 'The Last Kingdom: Reborn',
    author: { id: 'user-1', username: 'Alex Karev' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Harry Potter',
    rating: 4.8,
    viewCount: 2200,
    likeCount: 365,
  },
  {
    id: 'story-2',
    title: 'Beyond the Stars',
    author: { id: 'user-2', username: 'Eliza Chen' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Star Wars',
    rating: 4.7,
    viewCount: 1800,
    likeCount: 286,
  },
  {
    id: 'story-3',
    title: 'Whispers in the Rain',
    author: { id: 'user-3', username: 'James Donovan' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'K-Drama',
    rating: 4.9,
    viewCount: 3100,
    likeCount: 518,
  },
  {
    id: 'story-4',
    title: 'The Hero\'s Legacy',
    author: { id: 'user-4', username: 'Lina Parks' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Marvel',
    rating: 4.6,
    viewCount: 1500,
    likeCount: 194,
  },
  {
    id: 'story-5',
    title: 'Silent Whispers',
    author: { id: 'user-5', username: 'Daniel Morgan' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Game of Thrones',
    rating: 4.9,
    viewCount: 2700,
    likeCount: 412,
  },
];

const latestUpdates = [
  {
    id: 'story-6',
    title: 'Shadows of Venice',
    author: { id: 'user-6', username: 'Theo Reynolds' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Sherlock',
    rating: 4.5,
    viewCount: 1200,
    likeCount: 176,
  },
  {
    id: 'story-7',
    title: 'The Midnight House',
    author: { id: 'user-7', username: 'Sarah Blake' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Stranger Things',
    rating: 4.4,
    viewCount: 980,
    likeCount: 145,
  },
  {
    id: 'story-8',
    title: 'Dragon\'s Breath',
    author: { id: 'user-8', username: 'Marcus Lee' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Lord of the Rings',
    rating: 4.7,
    viewCount: 1700,
    likeCount: 284,
  },
  {
    id: 'story-9',
    title: 'Echoes of Destiny',
    author: { id: 'user-9', username: 'Marina Silva' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'The Witcher',
    rating: 4.8,
    viewCount: 2300,
    likeCount: 320,
  },
  {
    id: 'story-10',
    title: 'Whispers of Alexandria',
    author: { id: 'user-10', username: 'Thomas Reeves' },
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Outlander',
    rating: 4.7,
    viewCount: 1900,
    likeCount: 245,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Main Container */}
      <div className="content-container p-6 md:p-4">
        {/* Categories */}
        <Categories />

        {/* Featured Banner */}
        <FeaturedBanner />

        {/* Reading Stats */}
        <StatsCards />

        {/* Top Stories Section */}
        <section className="mb-10">
          <div className="section-header flex items-center justify-between mb-4">
            <h2 className="section-title text-xl font-semibold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[0.15rem] before:bottom-[0.15rem] before:w-1 before:bg-gradient-to-b before:from-primary before:to-secondary before:rounded-full">
              Top Fanfiction Stories
            </h2>
            <Link 
              href="/top-stories"
              className="section-link text-sm font-medium text-primary-light flex items-center transition-all duration-300 hover:text-secondary-light hover:translate-x-1"
            >
              View All <i className="fas fa-chevron-right ml-1 transition-transform duration-200 group-hover:translate-x-1"></i>
            </Link>
          </div>
          <div className="stories-grid grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 mb-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-2 sm:grid-cols-1">
            {topStories.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </section>

        {/* Latest Updates Section */}
        <section>
          <div className="section-header flex items-center justify-between mb-4">
            <h2 className="section-title text-xl font-semibold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-[0.15rem] before:bottom-[0.15rem] before:w-1 before:bg-gradient-to-b before:from-primary before:to-secondary before:rounded-full">
              Latest Updates
            </h2>
            <Link 
              href="/latest-updates"
              className="section-link text-sm font-medium text-primary-light flex items-center transition-all duration-300 hover:text-secondary-light hover:translate-x-1"
            >
              View All <i className="fas fa-chevron-right ml-1 transition-transform duration-200 group-hover:translate-x-1"></i>
            </Link>
          </div>
          <div className="stories-grid grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 mb-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-2 sm:grid-cols-1">
            {latestUpdates.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}