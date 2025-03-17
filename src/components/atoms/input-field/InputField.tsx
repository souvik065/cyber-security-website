"use client"

import type React from "react"
import { useState } from "react"
import { TextField, InputAdornment, IconButton, Typography, Box, useTheme } from "@mui/material"
import type { InputBaseProps } from "@mui/material"
import type { SxProps, Theme } from "@mui/material/styles"

export interface InputFieldProps extends InputBaseProps {
  radius?: number
  sx?: SxProps<Theme>
  autoComplete?: string
  autoFocus?: boolean
  defaultValue?: any
  disabled?: boolean
  error?: boolean
  id?: string
  label?: string
  inputProps?: Record<string, any>
  name?: string
  className?: string
  /**
   * Optional onChange handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  type?: string
  value?: any
  height?: number // Custom height
  width?: number // Custom width,
  startIcon?: React.ReactNode // Icon element for the start adornment
  endIcon?: React.ReactNode // Icon element for the end adornment
  onEndIconClick?: () => void
  onValueChange?: (value: string) => void
  errorMessage?: string
  /**
   * Label variant to be used.
   */
  labelVariant?: "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "title1" | "title2" | "caption"
  increasedHeight?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({
  radius = 8,
  sx,
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  error,
  id,
  label,
  inputProps,
  name,
  className,
  onChange,
  placeholder,
  required,
  type = "text",
  value,
  height,
  width,
  startIcon,
  endIcon,
  onEndIconClick,
  onValueChange,
  errorMessage,
  labelVariant = "body",
  increasedHeight = false,
  ...rest
}) => {
  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const isDarkMode = theme.palette.mode === "dark"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  const getVariantComponent = () => {
    switch (labelVariant) {
      case "h1":
        return <Typography variant="h1">{label}</Typography>
      case "h2":
        return <Typography variant="h2">{label}</Typography>
      case "h3":
        return <Typography variant="h3">{label}</Typography>
      case "h4":
        return <Typography variant="h4">{label}</Typography>
      case "h5":
        return <Typography variant="h5">{label}</Typography>
      case "h6":
        return <Typography variant="h6">{label}</Typography>
      case "title1":
        return <Typography variant="h5">{label}</Typography>
      case "title2":
        return <Typography variant="h6">{label}</Typography>
      case "caption":
        return <Typography variant="caption">{label}</Typography>
      default:
        return <Typography variant="body1">{label}</Typography>
    }
  }

  return (
    <Box sx={{ width: width ? `${width}px` : "100%" }}>
      {label && <Box sx={{ mb: 1 }}>{getVariantComponent()}</Box>}

      <TextField
        fullWidth
        id={id}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        required={required}
        error={error}
        className={className}
        inputProps={{
          ...inputProps,
        }}
        InputProps={{
          startAdornment: startIcon ? <InputAdornment position="start">{startIcon}</InputAdornment> : null,
          endAdornment: endIcon ? (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={onEndIconClick}
                sx={{
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {endIcon}
              </IconButton>
            </InputAdornment>
          ) : null,
          ...rest,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: `${radius}px`,
            height: increasedHeight ? "56px" : height ? `${height}px` : "auto",
            transition: "all 0.3s ease-in-out",
            backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
            "&:hover": {
              backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
                borderWidth: "2px",
              },
              boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
            },
            "&.Mui-error": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.error.main,
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: increasedHeight ? "16px 14px" : "12px 14px",
            },
          },
          ...sx,
        }}
      />

      {error && errorMessage && (
        <Typography
          variant="caption"
          color="error"
          sx={{
            mt: 0.5,
            display: "block",
            animation: "fadeIn 0.3s ease-in-out",
            "@keyframes fadeIn": {
              "0%": {
                opacity: 0,
                transform: "translateY(-5px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  )
}

export default InputField

