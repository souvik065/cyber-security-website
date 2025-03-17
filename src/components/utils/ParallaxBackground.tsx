"use client"

import type React from "react"
import type { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Box, type SxProps, type Theme } from "@mui/material"

interface ParallaxBackgroundProps {
  backgroundImage: string
  children: ReactNode
  sx?: SxProps<Theme>
  parallaxStrength?: number // Controls how strong the parallax effect is (0-1)
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  backgroundImage,
  children,
  sx = {},
  parallaxStrength = 0.2,
}) => {
  const { scrollY } = useScroll()

  // Transform the Y position based on scroll
  // As the user scrolls down, the background will move up slower than the content
  const yPos = useTransform(scrollY, [0, 1000], [0, 250 * parallaxStrength])

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        ...sx,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          //backgroundSize: "cover",
          //backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height:"80vh",
          border: "0.1rem solid",
          borderColor: "borderColor.main",
          backgroundColor: "borderColor.light",
          backgroundSize: window.innerWidth < 900 ? "80%" : "40%",
          backgroundPosition: "85% 90%",
          y: yPos,
          // Make the background image slightly larger to prevent white edges during parallax
          scale: 1.1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default ParallaxBackground

