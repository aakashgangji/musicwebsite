import React from 'react';
import { STREAM_PLATFORMS } from '../data/musicData';

export const StreamLinks: React.FC = () => {
  return (
    <section id="stream" className="mb-12 scroll-mt-24">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <i className="fas fa-headphones text-white text-xl"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Stream Everywhere</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STREAM_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-btn p-4 rounded-lg flex flex-col items-center justify-center text-center"
          >
            <i className={`${platform.iconClass} text-4xl mb-2`}></i>
            <span className="font-medium">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
