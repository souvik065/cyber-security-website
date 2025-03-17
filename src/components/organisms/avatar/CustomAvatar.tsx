import type React from "react"
import { useState } from "react"
import { Avatar as MuiAvatar, Menu, MenuItem, Typography, Box, Badge, type SxProps, type Theme } from "@mui/material"
import { styled } from "@mui/material/styles"

// Define menu item type
export interface MenuItemType {
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

// Define props for our custom Avatar component
export interface CustomAvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: number
  variant?: "circular" | "rounded" | "square"
  showStatus?: boolean
  status?: "online" | "offline" | "busy" | "away"
  isFunctional?: boolean
  menuItems?: MenuItemType[]
  sx?: SxProps<Theme>
  badgeSx?: SxProps<Theme>
  onClick?: () => void
}

// Styled Badge component for status indicator
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: `2px solid ${theme.palette.background.paper}`,
    padding: 0,
  },
}))

// Status color mapping
const statusColors = {
  online: "#44b700",
  offline: "#bdbdbd",
  busy: "#ff3d00",
  away: "#ffb400",
}

export const CustomAvatar: React.FC<CustomAvatarProps> = ({
  src,
  alt = "Avatar",
  name,
  size = 40,
  variant = "circular",
  showStatus = false,
  status = "offline",
  isFunctional = false,
  menuItems = [],
  sx = {},
  //badgeSx = {},
  onClick,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  // Generate initials from name
  const getInitials = (name?: string) => {
    if (!name) return ""
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isFunctional) {
      setAnchorEl(event.currentTarget)
      if (onClick) onClick()
    } else if (onClick) {
      onClick()
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Avatar with or without status badge
  const avatarElement = showStatus ? (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: statusColors[status],
          //...badgeSx,
        },
      }}
    >
      <MuiAvatar
        src={src}
        alt={alt}
        variant={variant}
        sx={{
          width: size,
          height: size,
          fontSize: size * 0.4,
          cursor: isFunctional || onClick ? "pointer" : "default",
          ...sx,
        }}
      >
        {!src && name ? getInitials(name) : null}
      </MuiAvatar>
    </StyledBadge>
  ) : (
    <MuiAvatar
      src={src}
      alt={alt}
      variant={variant}
      sx={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        cursor: isFunctional || onClick ? "pointer" : "default",
        ...sx,
      }}
    >
      {!src && name ? getInitials(name) : null}
    </MuiAvatar>
  )

  return (
    <Box>
      <Box onClick={handleClick}>{avatarElement}</Box>

      {isFunctional && menuItems.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 180,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              "& .MuiMenuItem-root": {
                px: 2,
                py: 1,
                borderRadius: 1,
                mx: 0.5,
                my: 0.25,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick} sx={{ gap: 1.5 }}>
              {item.icon && <Box sx={{ color: "text.secondary" }}>{item.icon}</Box>}
              <Typography variant="body2">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  )
}

export default CustomAvatar

