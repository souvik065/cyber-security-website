import React from "react";
import { Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { InlineBannerProps } from "../../../types/InlineBannerProps";
import CustomButton from "../../atoms/button/customButton";
import TypographyStyles from "../../atoms/typography/TypographyStyles";



const InlineBanner: React.FC<InlineBannerProps> = ({
  title,
  description,
  location,
  timings,
  additionalDetails = [],
  actionText,
  //onActionClick,
  sx,
}) => {
  return (
    <Box
      sx={{
        boxShadow: 2,
        padding: 2,
        minHeight: 100,
        border: "0.1rem solid",
        borderColor:"borderColor.main",
        py:5,
        ...sx,
      }}
    >

      <Box sx={{ 
        mx: { sm: 5, md: 20, lg: 40 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* First Column: Title & Description */}
        <Box sx={{ flex: 1 }}>
          <TypographyStyles variant="h6" >
            {title}
          </TypographyStyles>
          <TypographyStyles variant="title1" color="light-grey" >
            {description}
          </TypographyStyles>
        </Box>

        {/* Second Column: Location, Timings & Additional Details */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <TypographyStyles variant="title1">{location}</TypographyStyles>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccessTimeIcon color="primary" />
            <TypographyStyles variant="title1">{timings}</TypographyStyles>
          </Box>
          {additionalDetails.map((detail, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {detail.icon}
              <TypographyStyles variant="title2">{detail.text}</TypographyStyles>
            </Box>
          ))}
        </Box>

        {/* Third Column: Action Button */}
        <Box sx={{ flex: 0.3, textAlign: "right" }}>
          <CustomButton>{actionText}</CustomButton>
        </Box>

      </Box>
    </Box>
  );
};

export default InlineBanner;
