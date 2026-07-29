export interface StreamPlatform {
  name: string;
  url: string;
  iconClass: string;
  isAvailable?: boolean;
}

export interface Release {
  id: string;
  title: string;
  subtitle?: string;
  releaseDate: string;
  coverImage: string;
  cdImage?: string;
  isUpcoming?: boolean;
  featured?: boolean;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeUrl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeEmbedUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
