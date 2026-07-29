import React, { useState } from 'react';
import { VideoItem } from '../types/music';

interface VideoCarouselProps {
  videos: VideoItem[];
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const totalVideos = videos.length;

  const changeVideo = (direction: number) => {
    setCurrentVideo((prev) => (prev + direction + totalVideos) % totalVideos);
  };

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
          <i className="fas fa-video text-white text-xl"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Music Videos</h2>
      </div>

      <div className="glass-card p-6">
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              className="absolute left-0 z-10 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-gray-700 transition-colors focus:outline-none"
              onClick={() => changeVideo(-1)}
              aria-label="Previous Video"
            >
              <i className="fas fa-chevron-left text-xl"></i>
            </button>

            <div className="video-container w-full max-w-4xl">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-wrapper ${index === currentVideo ? '' : 'hidden'}`}
                >
                  <iframe
                    src={video.youtubeEmbedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 z-10 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full hover:bg-gray-700 transition-colors focus:outline-none"
              onClick={() => changeVideo(1)}
              aria-label="Next Video"
            >
              <i className="fas fa-chevron-right text-xl"></i>
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                  index === currentVideo ? 'bg-white' : 'bg-gray-600 hover:bg-white'
                }`}
                onClick={() => goToVideo(index)}
                aria-label={`Go to video ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
