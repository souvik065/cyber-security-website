import type {SxProps, Theme } from "@mui/material";

// export interface CardProps {
//     navIcon?: IconProp;
//     title?: string;
//     description?:string;
//     cardButtonOnClick?: () => void;
//     className?: string;
//     children?:ReactNode;
//     cardImage?:string;
//     cardContent?: "row" | "column";
//     cardImageAlignment?: "up" | "down";
//   imagePosition?: "top" | "bottom" | "left" | "right"; // Choose image position
// }

interface BaseCardProps{
  variant?: CardVariant
  title?: string
  description?: string
}

interface SimpleCardProps extends BaseCardProps{
  variant: "simple";
  image?: never;
  date?: never;

}


interface BlogCardProps extends BaseCardProps{
  variant:"blog";
  image:string;
  date?: string;
  
}

interface InfoCardProps extends BaseCardProps{
  variant:"info";
  image?:string;
}

export type CardProps = SimpleCardProps | BlogCardProps | InfoCardProps;


export type CardVariant = "simple" | "blog" | "info"

export interface CustomCardProps {
  variant?: CardVariant
  title?: string
  description?: string
  layoutType?: "flex" | "block"
  imagePosition?: "left" | "right"
  content?: string
  footer?: React.ReactNode,
  customContent?: React.ReactNode,
  image?: string
  date?: string
  sx?: SxProps<Theme>
  alignItem?:"center" | "end" | "flex-end" | "flex-start"
  width?:"100%" | number | string
  height?: "100%" | number | string,
  tagValue?:string,
  tagColor?:string,
  isTag?:boolean,
  onClick?: () => void
  className?: string
}