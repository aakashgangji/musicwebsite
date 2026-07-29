import React from 'react';
import { Release } from '../types/music';

interface UpcomingReleaseProps {
  release: Release;
}

export const UpcomingRelease: React.FC<UpcomingReleaseProps> = ({ release }) => {
  return (
    <section className="h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-700/80 flex items-center justify-center mr-3">
          <i className="fas fa-clock text-sky-400 text-lg"></i>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Upcoming Release</h2>
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
          <p className="text-xs text-gray-400 mb-4">{release.releaseDate}</p>

          <div className="flex items-center justify-center gap-4">
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 text-white/40 text-xl border border-white/10 opacity-50 cursor-not-allowed shadow-inner"
              title="Spotify (Coming Soon)"
              aria-label="Spotify (Coming Soon)"
            >
              <i className="fab fa-spotify"></i>
            </span>
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 text-white/40 text-xl border border-white/10 opacity-50 cursor-not-allowed shadow-inner"
              title="Apple Music (Coming Soon)"
              aria-label="Apple Music (Coming Soon)"
            >
              <i className="fas fa-music"></i>
            </span>
            <span
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 text-white/40 text-xl border border-white/10 opacity-50 cursor-not-allowed shadow-inner"
              title="YouTube (Coming Soon)"
              aria-label="YouTube (Coming Soon)"
            >
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
