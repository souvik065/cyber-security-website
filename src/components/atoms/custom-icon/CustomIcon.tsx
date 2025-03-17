'use client';
import './CustomIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomIconProps } from '../../../types/CustomIconProps';

const CustomIcon = ({ icon, className, size }: CustomIconProps) => {  

  const getSizeClassName = (size: string) => {
    switch (size) {
      case 'small':
        return 'size-small';
      case 'regular':
        return 'size-regular';
      case 'medium':
        return 'size-medium';
      case 'large':
        return 'size-large';
      default:
        return '';
    }
  };

  let sizeClassName = '';
  if (size) {
    sizeClassName = getSizeClassName(size);
  }

  return <FontAwesomeIcon icon={icon} className={`custom-icon ${sizeClassName} ${className}`} />;
};

export default CustomIcon;
