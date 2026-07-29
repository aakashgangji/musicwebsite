import { Release, VideoItem, SocialLink, TimelineEvent, StreamPlatform } from '../types/music';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/aakashgangji',
    iconClass: 'fab fa-instagram',
  },
  {
    platform: 'Snapchat',
    url: 'https://snapchat.com/t/EhlZc8d2',
    iconClass: 'fab fa-snapchat',
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@aakashgangji',
    iconClass: 'fab fa-youtube',
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/0q8iGRi1gXSAMj7PhdZsVn?si=WJ6KmS4xR4aioj4XXbngkw',
    iconClass: 'fab fa-spotify',
  },
];

export const STREAM_PLATFORMS: StreamPlatform[] = [
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/in/artist/aakash-gangji/1762185699',
    iconClass: 'fas fa-music',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/0q8iGRi1gXSAMj7PhdZsVn?si=WJ6KmS4xR4aioj4XXbngkw',
    iconClass: 'fab fa-spotify',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCjm7O7W-NUrjSUq0pVUm8Dg?si=L_bYmruB2S8Gs9UW',
    iconClass: 'fab fa-youtube',
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com.au/artists/B0DCNR3YYJ/aakash-gangji',
    iconClass: 'fab fa-amazon',
  },
];

export const FEATURED_RELEASE: Release = {
  id: 'bhai-mere-saath',
  title: 'Bhai Mere Saath',
  subtitle: 'A tribute to true brotherhood',
  releaseDate: 'July 2025',
  coverImage: '/images/bhaimeresaath.png',
  cdImage: '/images/cd.png',
  featured: true,
  spotifyUrl: 'https://open.spotify.com/album/2TAClbP0o7TmfknkUpmrC4?si=1LczFFfvQoiBKrpuBQz3sg',
  appleMusicUrl: 'https://music.apple.com/us/song/bhai-mere-saath/1834515748',
  youtubeUrl: 'https://youtu.be/evRC_KhMjsQ',
};

export const UPCOMING_RELEASE: Release = {
  id: 'bharat-won',
  title: 'Bharat Won',
  subtitle: 'Coming Soon',
  releaseDate: 'Release Date: TBA',
  coverImage: '/images/BharatWon.png',
  cdImage: '/images/cd.png',
  isUpcoming: true,
};

export const DISCOGRAPHY: Release[] = [
  {
    id: 'thoda-karlo-mujhse-pyaar',
    title: 'Thoda Karlo Mujhse Pyaar',
    releaseDate: 'August 2024',
    coverImage: '/images/poster.png',
    cdImage: '/images/cd.png',
    spotifyUrl: 'https://open.spotify.com/track/5SqUc5g7fyafZhD55j2g8i?si=1cc0ce56e28a460b',
    appleMusicUrl: 'https://music.apple.com/us/album/thoda-karlo-mujhse-pyaar-feat-syed-mavahid-abhishek/1762187354',
    youtubeUrl: 'https://www.youtube.com/watch?v=8HeL6L487Yk',
  },
  {
    id: 'bhai-mere-saath-discography',
    title: 'Bhai Mere Saath',
    releaseDate: 'July 2025',
    coverImage: '/images/bhaimeresaath.png',
    cdImage: '/images/cd.png',
    spotifyUrl: 'https://open.spotify.com/album/2TAClbP0o7TmfknkUpmrC4?si=1LczFFfvQoiBKrpuBQz3sg',
    appleMusicUrl: 'https://music.apple.com/us/song/bhai-mere-saath/1834515748',
    youtubeUrl: 'https://youtu.be/evRC_KhMjsQ',
  },
  {
    id: 'the-rcb-song',
    title: 'The RCB Song',
    releaseDate: '2019',
    coverImage: '/images/rcb.png',
    cdImage: '/images/cd.png',
    spotifyUrl: 'https://open.spotify.com/track/5xOZHJ7n4pfgue9Lffrs4x?si=718e62dfaae44313',
    appleMusicUrl: 'https://music.apple.com/us/song/the-rcb-song/1806730026',
    youtubeUrl: 'https://youtu.be/ZDOuwi85-uQ?si=qBRLxqhIqQ8ltI10',
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'video-bhai-mere-saath',
    title: 'Bhai Mere Saath Music Video',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/evRC_KhMjsQ',
  },
  {
    id: 'video-thoda-karlo',
    title: 'Thoda Karlo Mujhse Pyaar Music Video',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/8HeL6L487Yk',
  },
  {
    id: 'video-rcb-song',
    title: 'The RCB Song Music Video',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/ZDOuwi85-uQ',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2019',
    title: 'The Beginning',
    description: '"The RCB Song" - A viral Kannada rap parody that introduced me to the world of music and showed me the power of connecting with audiences through relatable content.',
  },
  {
    year: '2024',
    title: 'Debut Single',
    description: '"Thoda Karlo Mujhse Pyaar" - My first official single featuring Syed Mavahid & Abhishek Kanti, produced by Saikumar Hodalur, marking my entry into the professional music scene.',
  },
  {
    year: '2025',
    title: 'Latest Release',
    description: '"Bhai Mere Saath" - A tribute to true friendship and brotherhood, celebrating the genuine relationships that stand the test of time.',
  },
  {
    year: 'Future',
    title: 'Upcoming',
    description: '"Bharat Won" - An upcoming release that continues my journey of storytelling through music, exploring new themes and musical directions.',
  },
];
