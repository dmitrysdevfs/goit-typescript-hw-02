import { ImageItem } from '../../types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  item: ImageItem;
  onClick: (event: React.MouseEvent<HTMLImageElement>, item: ImageItem) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div className={css.wrapper}>
      <img
        onClick={(event) => onClick(event, item)}
        src={item.urls.small}
        alt={item.alt_description}
        className={css.img}
      />
    </div>
  );
}

export default ImageCard;