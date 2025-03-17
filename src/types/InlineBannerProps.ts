import { SxProps, Theme } from "@mui/material";

export interface InlineBannerProps {
  title: string;
  description: string;
  location: string;
  timings: string;
  additionalDetails?: { icon: React.ReactNode; text: string }[];
  actionText: string;
  onActionClick: () => void;
  sx?: SxProps<Theme>;
}