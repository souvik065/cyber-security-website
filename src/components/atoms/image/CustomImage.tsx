import './CustomImage.scss';
import { CustomImageProps } from '../../../types/CustomImageProps';


const CustomImage = ({ 
  className = '', 
  source,
  description, 
  isGif,
  width='100%',
  height='auto'
}:CustomImageProps) => {
  return (
    <img
      src={source}
      alt={description}
      loading={isGif ? 'lazy' : 'eager'} 
      className={`img-fluid ${className}`}
      style={{width, height}}
    />
  );
};

export default CustomImage;
