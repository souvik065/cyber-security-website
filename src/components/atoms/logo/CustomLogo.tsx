import React from "react";
import { Box } from "@mui/material";
import { LogoImageProps } from "../../types/LogoImageProps";

const CustomLogo: React.FC<LogoImageProps> = ({
  alt = "01 Crew",
  height = 150,
  width = 200,
  src,
  className,
  ...props
}) => {
  return (
    <Box
      component="img"
      className={className}
      alt={alt}
      src={src}
      sx={{
        height: height,
        width: width,
        objectFit: "contain", // Adjust as needed
      }}
      {...props}
    />
  );
};

export default CustomLogo;
