import { ImageItem } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: ImageItem[];
  onClick: (item: ImageItem) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onClick(item)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;