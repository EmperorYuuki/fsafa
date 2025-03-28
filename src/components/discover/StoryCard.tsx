
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  id: string;
  title: string;
  author: {
    id: string;
    username: string;
  };
  coverImage?: string;
  fandom: string;
  rating: number;
  viewCount: number;
  likeCount: number;
}

export default function StoryCard({
  id,
  title,
  author,
  coverImage = '/placeholder-cover.jpg',
  fandom,
  rating,
  viewCount,
  likeCount,
}: StoryCardProps) {
  return (
    <div className="story-card">
      <div className="story-cover relative h-40 sm:h-[180px]">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="story-fandom absolute top-3 right-3 bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white z-10">
          {fandom}
        </div>
        <div className="story-rating absolute top-3 left-3 bg-background/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-white z-10 flex items-center">
          <i className="fas fa-star text-warning mr-1"></i>
          {rating.toFixed(1)}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-50 transition-opacity duration-300 hover:opacity-70"></div>
      </div>
      
      <div className="story-content p-4 flex flex-col flex-1">
        <Link href={`/story/${id}`}>
          <h3 className="story-title font-semibold text-base mb-1 line-clamp-2 hover:text-primary-light transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="story-author text-sm text-text-tertiary mb-3 flex items-center">
          <i className="fas fa-user mr-1 text-xs"></i>
          <Link href={`/profile/${author.username}`} className="hover:text-primary-light">
            {author.username}
          </Link>
        </div>
        
        <div className="story-meta mt-auto flex justify-between">
          <div className="meta-item flex items-center text-xs text-text-muted">
            <i className="far fa-eye mr-1"></i>
            {viewCount > 1000 ? `${(viewCount / 1000).toFixed(1)}k` : viewCount}
          </div>
          <div className="meta-item flex items-center text-xs text-text-muted">
            <i className="far fa-heart mr-1"></i>
            {likeCount > 1000 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount}
          </div>
        </div>
      </div>
    </div>
  );
}