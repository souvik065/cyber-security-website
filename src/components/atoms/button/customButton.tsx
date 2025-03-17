'use client';
import { CustomButtonProps } from '../../../types/customButtonProps';
import { CircularProgress } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import "./CustomButton.scss"

// const IconAdornment = (icon: React.ReactNode) => {
//   return <span className="button-icon">{icon}</span>;
// };

const IconAdornment: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return <span className="button-icon">{icon}</span>;
};

const getSizeClassName = (size: string) => {
  switch (size) {
    case 'small':
      return 'size-small';
    case 'medium':
      return 'size-medium';
    case 'large':
      return 'size-large';
    case 'fullwidth':
      return 'full-width';
    default:
      return '';
  }
};

const CustomButton = ({
  variant='primary',
  size,
  fullWidth,
  startIcon,
  endIcon,
  color,
  loading,
  fontSize="inherit",
  ...props
}: CustomButtonProps ) => {
  let sizeClassName = '';
  if (size) {
    sizeClassName = getSizeClassName(size);
  }

  const computedFontSize =
    typeof fontSize === 'number' ? `${fontSize}px` : String(fontSize);

  return (
    <>
      <ButtonBase
        className={`button ${sizeClassName} ${variant} `}
        disabled={loading}
        style={{ fontSize: computedFontSize }}
        {...props}
      >
        {loading ? (
          <CircularProgress className="button-circular" size={15} />
        ) : (
          <>
          {startIcon && <IconAdornment icon={startIcon} />}
          {props.children}
          {endIcon && <IconAdornment icon={endIcon} />}
          </>
        )}
      </ButtonBase>
    </>
  );
};

export default CustomButton;
