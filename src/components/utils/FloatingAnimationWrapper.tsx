"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface FloatingAnimationWrapperProps {
  children: ReactNode
  className?: string
  floatIntensity?: number
  floatDuration?: number
  hoverScale?: number
  width?: string
  withGlow?: boolean
  glowColor?: string
}

export default function FloatingAnimationWrapper({
  children,
  className = "",
  floatIntensity = 15,
  floatDuration = 4,
  hoverScale = 1.05,
  withGlow = true,
  glowColor,
}: FloatingAnimationWrapperProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: isHovered ? [0, -floatIntensity * 0.7, 0] : [0, -floatIntensity, 0],
      }}
      transition={{
        duration: isHovered ? floatDuration * 0.5 : floatDuration,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale }}
    >
      {withGlow && (
        <motion.div
        style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "120%",
            height: "120%",
            borderRadius: "20px",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            opacity: 0.75,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          //className={`absolute -inset-4 rounded-xl bg-gradient-to-r ${glowColor} opacity-75 blur-xl`}
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      )}
      <motion.div
        className="relative" style={{display:"flex", justifyContent:"center"}} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>
    </motion.div>
  )
}

