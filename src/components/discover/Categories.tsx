
'use client';

import { useState } from 'react';

const categoryList = [
  { id: 'all', name: 'All' },
  { id: 'anime-manga', name: 'Anime & Manga' },
  { id: 'video-games', name: 'Video Games' },
  { id: 'movies', name: 'Movies' },
  { id: 'tv-shows', name: 'TV Shows' },
  { id: 'books', name: 'Books' },
  { id: 'comics', name: 'Comics' },
  { id: 'k-drama', name: 'K-Drama' },
  { id: 'music', name: 'Music' },
  { id: 'celebrities', name: 'Celebrities' },
  { id: 'theater', name: 'Theater' },
];

interface CategoriesProps {
  onCategoryChange?: (categoryId: string) => void;
}

export default function Categories({ onCategoryChange }: CategoriesProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div className="categories flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-none">
      {categoryList.map((category) => (
        <div
          key={category.id}
          className={`category py-2 px-4 bg-surface border border-border-subtle rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300 hover:border-primary-light hover:shadow hover:-translate-y-1 ${
            activeCategory === category.id ? 'active bg-gradient-to-br from-primary to-secondary text-white border-none' : ''
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}