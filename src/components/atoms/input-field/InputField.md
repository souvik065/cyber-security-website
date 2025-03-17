```javascript
'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import './InputField.scss';
import { InputAdornment, InputBase, useTheme } from '@mui/material';
import TypographyStyle from '../typography/TypographyStyles';
import { InputFieldProps } from '../../../types/InputFieldProps';

const IconAdornment = (icon: React.ReactNode, position: 'end' | 'start', className?: string, onClick?: () => void) => {
  return (
    <InputAdornment position={position}>
      <span className={className} onClick={onClick}>
        {icon}
      </span>
    </InputAdornment>
  );
};

/**
 * CrewInputField is an input text box with label, startIcon, endIcon, error and errorMessage
 */

const InputField = ({
  name,
  placeholder,
  type,
  label,
  startIcon,
  endIcon,
  onEndIconClick,
  error,
  errorMessage,
  id,
  labelVariant,
  onValueChange,
  increasedHeight,
  className,
  disabled = false,
  ...props
}: InputFieldProps) => {
  const [value, setValue] = useState<string | number>(props.value);
  const theme = useTheme();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
    onValueChange?.(updatedValue);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const getBackgroundColorClass = () => {
    return theme.palette.mode === 'dark' ? 'dark-mode' : 'light-mode';
  };

  const inputErrorClasses = error ? 'input-error' : '';

  return (
    <>
      <TypographyStyle className='input-label' variant={labelVariant}>{label}</TypographyStyle>
      <div className={`input-container`}>
        <InputBase
          {...props}
          className={`form-input-control ${className} ${getBackgroundColorClass()} ${inputErrorClasses} ${
            increasedHeight ? 'increased-height' : ''
          }`}
          value={value}
          name={name}
          id={id}
          onChange={handleChange}
          placeholder={placeholder || `Enter ${name}`}
          startAdornment={startIcon && IconAdornment(startIcon, 'start')}
          endAdornment={endIcon && IconAdornment(endIcon, 'end', 'input-end-icon', onEndIconClick)}
          type={type}
          disabled={disabled}
        />
        {error && (
          <TypographyStyle className="input-field-error" variant={labelVariant}>
            {errorMessage}
          </TypographyStyle>
        )}
      </div>
    </>
  );
};

export default InputField;

```