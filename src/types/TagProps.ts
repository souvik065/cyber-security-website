
//import { type ChipProps } from "@mui/material"

// Extend the ChipProps interface to add any custom props
export interface TagProps  {
  variant?: "filled" | "outlined"
  size?: "small" | "medium"
  label?:string
  onDelete?: () => void
  style?: React.CSSProperties
  color?: string
}
