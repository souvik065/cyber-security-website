'use client';
import { TypographyWithIconProps } from '../../../types/TypographyProps';
import './TypographyWithIcon.scss';
import { useTheme } from '@mui/material';

const IconAdornment: React.FC<{ icon: React.ReactNode, className:string }> = ({ icon, className }) => {
  return <span className={`button-icon ${className}`}>{icon}</span>;
};

const TypographyWithIcon = ({
  fontWeight,
  textAlign,
  color,
  iconPlacementPosition,
  variant='body',
  className,
  icon,
  ...props
}: TypographyWithIconProps) => {
    
    const tagMapping: { [key: string]: keyof JSX.IntrinsicElements } = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        body: "p",
        title1: "h4",
        title2: "h5",
        caption: "span",
    };

    const Tag = tagMapping[variant] || "p";

  const theme = useTheme();
  const fontWeightClass = fontWeight ? `font-weight-${fontWeight}` : '';
  const colorClass = color ? `font-${theme.palette.mode === 'dark' ? 'dark-mode' : 'light-mode'}-color` : '';
  return (
    <Tag
      className={`typographyWithIcon ${theme.palette.mode === 'dark' ? 'dark-mode' : 'light-mode'}
       ${variant} ${fontWeightClass} ${colorClass} ${className}`}
    >
      {icon && iconPlacementPosition === 'left' && <IconAdornment icon={icon} className="icon-left" />}
      {props.children}
      {icon && iconPlacementPosition === 'right' && <IconAdornment icon={icon} className="icon-right" />}
    </Tag>
  );
};

export default TypographyWithIcon;
