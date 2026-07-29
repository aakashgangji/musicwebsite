import React, { useEffect } from 'react';
import { TIMELINE } from '../data/musicData';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
            <i className="fas fa-user text-white text-xl"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">About Me</h1>
        </div>

        <div className="glass-card p-6 md:p-8 hover-grow">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm Aakash Gangji, an artist from Kalaburagi, Karnataka. My musical journey began in 2019 when my Kannada rap parody "The RCB Song" went viral, opening doors to share my creativity and emotions with a wider audience.
            </p>

            <p>
              Since then, my sound has grown, leading to my heartfelt debut single "Thoda Karlo Mujhse Pyaar" (featuring Syed Mavahid & Abhishek Kanti, produced by Saikumar Hodalur). This track represents a significant milestone in my artistic evolution, showcasing my ability to blend different musical styles and collaborate with talented artists.
            </p>

            <p>
              I'm also proud of my latest track "Bhai Mere Saath," dedicated to my close friends who embody true brotherhood standing by me while some others create drama just for attention. This song reflects the genuine relationships that matter most in life.
            </p>

            <p>
              With every song, I aim to tell honest stories and connect with listeners through genuine feelings. My music is a reflection of my experiences, emotions, and the world around me, expressed through melodies that resonate with people from all walks of life.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
            <i className="fas fa-music text-white text-xl"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Musical Journey</h2>
        </div>

        <div className="glass-card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIMELINE.map((event) => (
              <div key={event.year} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-3">
                  {event.year} - {event.title}
                </h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
            <i className="fas fa-map-marker-alt text-white text-xl"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">From Kalaburagi</h2>
        </div>

        <div className="glass-card p-6 md:p-8 hover-grow">
          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              Hailing from Kalaburagi, Karnataka, I bring the rich cultural heritage and diverse musical traditions of my region into my contemporary sound. The city's vibrant atmosphere and the support of my local community have been instrumental in shaping my artistic identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
