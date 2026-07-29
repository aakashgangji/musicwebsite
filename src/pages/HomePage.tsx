import React from 'react';
import { FeaturedRelease } from '../components/FeaturedRelease';
import { UpcomingRelease } from '../components/UpcomingRelease';
import { StreamLinks } from '../components/StreamLinks';
import { Discography } from '../components/Discography';
import { VideoCarousel } from '../components/VideoCarousel';
import { Contact } from '../components/Contact';
import { FEATURED_RELEASE, UPCOMING_RELEASE, DISCOGRAPHY, VIDEOS } from '../data/musicData';

export const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <FeaturedRelease release={FEATURED_RELEASE} />
        <UpcomingRelease release={UPCOMING_RELEASE} />
      </div>

      <StreamLinks />
      <Discography releases={DISCOGRAPHY} />
      <VideoCarousel videos={VIDEOS} />
      <Contact />
    </div>
  );
};
