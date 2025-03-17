
import { type ChipProps } from "@mui/material"

// Extend the ChipProps interface to add any custom props
export interface TagProps extends Omit<ChipProps, "variant"> {
  variant?: "filled" | "outlined"
  size?: "small" | "medium"
}
