export interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;

  // data for Modal
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
