import { ButtonBaseProps } from '@mui/material';
import { ReactNode } from 'react';

export interface CustomButtonProps extends ButtonBaseProps {
  variant?: 'text' | 'primary' | 'secondary' | 'transparent';
  size?: 'small' | 'medium' | 'large' | 'fullwidth';
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: string;
  sx?: Record<string, any>;
  loading?: boolean;
  fontSize?: String | number;
}
