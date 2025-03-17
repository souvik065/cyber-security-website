import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import { TagProps } from "../../../types/TagProps"
import { styled } from "@mui/material"

// Create a styled version of Chip with some default styling
const StyledTag = styled(Chip)<{ customColor?: string }>(({ theme, customColor }) => ({
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontSize: "0.8rem",
  textTransform: "none",
  ...(customColor && {
    backgroundColor: customColor,
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    '&.MuiChip-outlined': {
      borderColor: customColor,
      color: customColor,
      backgroundColor: 'transparent',
    }
  }),
  "&.MuiChip-sizeSmall": {
    height: 24,
    fontSize: "0.75rem",
  },
}))

export const Tag: React.FC<TagProps & {
  color?: keyof Theme['palette'] | string;
}> = ({
  label,
  color = "primary",
  size = "small",
  variant = "filled",
  onDelete,
  ...props
}) => {
  const isCustomColor = color && !['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'].includes(color as string); 
  
  return (
    <StyledTag 
      label={label} 
      color={isCustomColor ? undefined : (color as ChipProps['color'])} 
      customColor={isCustomColor ? color : undefined}
      size={size} 
      variant={variant} 
      onDelete={onDelete} 
      {...props} 
    />
  )
}