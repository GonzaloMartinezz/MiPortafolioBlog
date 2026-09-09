import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: string | number;
  author: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.map((article) => {
          const content = (
            <div className="flex flex-col group cursor-pointer h-full">
              {/* Image Container */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-zinc-900 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2.5 font-medium">
                <span>{article.author}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#F66C44]"></span>
                <span className="text-[#F66C44] font-bold group-hover:text-amber-400 transition-colors">{article.readTime}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#F66C44] transition-colors">
                {article.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">
                {article.description}
              </p>
            </div>
          );

          if (article.href) {
            return (
              <Link key={article.id} href={article.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
              </Link>
            );
          }

          return (
            <div key={article.id} className="block h-full">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
