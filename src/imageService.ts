import axios, { AxiosResponse } from 'axios';
import { ImageItem } from './types';

interface UnsplashResponse {
  results: ImageItem[];
  total_pages: number;
}

export const fetchImages = async (
  topic: string,
  currentPage: number
): Promise<UnsplashResponse> => {
  const response: AxiosResponse<UnsplashResponse> = await axios.get(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: 'CcDn3vQvUoDUocIcHEm7UUPlG03xSG4EfZsxFm86iCI',
        query: topic,
        orientation: 'landscape',
        per_page: 12,
        page: currentPage,
      },
    }
  );

  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
