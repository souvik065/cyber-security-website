import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type CustomIconProps = {
  icon: IconProp;
  size?: 'small' | 'regular' | 'medium' | 'large';
  sx?: React.CSSProperties;
  hasInheritedStyles?: boolean;
  className?: string;
};
