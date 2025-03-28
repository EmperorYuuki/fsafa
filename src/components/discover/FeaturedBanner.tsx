
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedBannerProps {
  story: {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    fandom: string;
  };
}

export default function FeaturedBanner({
  story = {
    id: 'featured-1',
    title: 'The Chronicles of Eldoria: A New Beginning',
    description: 'Explore the magical world of Eldoria where ancient prophecies and modern conflicts collide in this epic Harry Potter fanfiction.',
    coverImage: '/placeholder-cover.jpg',
    fandom: 'Harry Potter',
  },
}: Partial<FeaturedBannerProps>) {
  return (
    <div className="featured-banner relative h-[280px] md:h-[240px] sm:h-[200px] rounded-xl overflow-hidden mb-8 shadow-lg">
      <div className="absolute inset-0">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="banner-overlay absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 flex flex-col justify-end p-6">
        <div className="banner-tag inline-flex items-center bg-primary/80 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-semibold text-white mb-3 w-fit">
          Featured Fanfiction
        </div>
        <h2 className="banner-title text-2xl md:text-xl sm:text-lg font-bold font-heading mb-3 leading-tight tracking-tight">
          {story.title}
        </h2>
        <p className="banner-description text-base sm:text-sm text-text-secondary mb-4 max-w-[60%] sm:max-w-full sm:line-clamp-2">
          {story.description}
        </p>
        <div className="banner-actions flex gap-3 sm:flex-wrap sm:gap-2">
          <Link
            href={`/story/${story.id}`}
            className="btn-banner primary bg-gradient-to-br from-primary to-secondary text-white inline-flex items-center py-3 px-5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <i className="fas fa-book-open mr-2"></i>Start Reading
          </Link>
          <button
            className="btn-banner secondary bg-white/10 backdrop-blur-sm text-white inline-flex items-center py-3 px-5 rounded-lg font-semibold text-sm transition-all duration-300 border border-white/20 hover:-translate-y-1 hover:shadow-lg"
          >
            <i className="fas fa-bookmark mr-2"></i>Save for Later
          </button>
        </div>
      </div>
    </div>
  );
}