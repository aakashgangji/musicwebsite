import React from 'react';
import { Release } from '../types/music';

interface FeaturedReleaseProps {
  release: Release;
}

export const FeaturedRelease: React.FC<FeaturedReleaseProps> = ({ release }) => {
  return (
    <section className="h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center mr-3">
          <i className="fas fa-fire text-amber-400 text-lg"></i>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Featured Release</h2>
      </div>

      <div className="glass-card p-6 flex-1 flex flex-col items-center justify-between hover-grow">
        <div className="poster-container relative my-2 w-44 h-44 md:w-48 md:h-48">
          {release.cdImage && (
            <img src={release.cdImage} alt="CD" className="cd-image cd-spin" />
          )}
          <img src={release.coverImage} alt={release.title} className="poster-image" />
        </div>

        <div className="text-center w-full mt-3">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{release.title}</h3>
          {release.subtitle && <p className="text-sm text-gray-300 mb-1">{release.subtitle}</p>}
          <p className="text-xs text-gray-400 mb-4">Released: {release.releaseDate}</p>

          <div className="flex items-center justify-center gap-4">
            {release.spotifyUrl && (
              <a
                href={release.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-emerald-500/20 hover:border-emerald-400/50 text-white hover:text-emerald-400 text-xl border border-white/15 transition-all duration-300 hover:scale-110 shadow-lg"
                title="Listen on Spotify"
                aria-label="Spotify"
              >
                <i className="fab fa-spotify"></i>
              </a>
            )}
            {release.appleMusicUrl && (
              <a
                href={release.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-rose-500/20 hover:border-rose-400/50 text-white hover:text-rose-400 text-xl border border-white/15 transition-all duration-300 hover:scale-110 shadow-lg"
                title="Listen on Apple Music"
                aria-label="Apple Music"
              >
                <i className="fas fa-music"></i>
              </a>
            )}
            {release.youtubeUrl && (
              <a
                href={release.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-red-500/20 hover:border-red-400/50 text-white hover:text-red-400 text-xl border border-white/15 transition-all duration-300 hover:scale-110 shadow-lg"
                title="Watch on YouTube"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
