export interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface ExtendedImageItem extends ImageItem {
  likes: number;
  created_at: string;
  user: {
    name?: string;
    username?: string;
    location?: string;
    profile_image?: {
      medium: string;
    };
  };
}
