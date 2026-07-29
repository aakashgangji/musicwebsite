import React from 'react';
import { Release } from '../types/music';

interface DiscographyProps {
  releases: Release[];
}

export const Discography: React.FC<DiscographyProps> = ({ releases }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <i className="fas fa-compact-disc text-white text-xl"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Discography</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {releases.map((release) => (
          <div key={release.id} className="glass-card p-6 flex items-center hover-grow">
            <div className="poster-container relative w-28 h-28 mr-6 flex-shrink-0">
              {release.cdImage && (
                <img src={release.cdImage} alt="CD" className="cd-image cd-spin" />
              )}
              <img src={release.coverImage} alt={release.title} className="poster-image" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold text-white mb-1 truncate">{release.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{release.releaseDate}</p>
              <div className="flex space-x-3 text-lg">
                {release.spotifyUrl && (
                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Listen to ${release.title} on Spotify`}
                  >
                    <i className="fab fa-spotify"></i>
                  </a>
                )}
                {release.appleMusicUrl && (
                  <a
                    href={release.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Listen to ${release.title} on Apple Music`}
                  >
                    <i className="fas fa-music"></i>
                  </a>
                )}
                {release.youtubeUrl && (
                  <a
                    href={release.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Watch ${release.title} on YouTube`}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
