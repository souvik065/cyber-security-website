"use client"

import type React from "react"
import { useState } from "react"
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  type SxProps,
  type Theme,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define TypeScript interfaces for our props
interface AccordionItemProps {
  title: string
  content: string | React.ReactNode
  defaultExpanded?: boolean
  titleSx?: SxProps<Theme>
  contentSx?: SxProps<Theme>
}

interface AccordionProps {
  items: AccordionItemProps[]
  sx?: SxProps<Theme>
}

export default function Accordion({ items, sx }: AccordionProps) {
  const [expanded, setExpanded] = useState<string | false>(items.find((item) => item.defaultExpanded)?.title || false)

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        ...sx,
      }}
    >
      {items.map((item, index) => (
        <MuiAccordion
          key={index}
          expanded={expanded === item.title}
          onChange={handleChange(item.title)}
          sx={{
            mb: 2,
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              transform: "scale(1.01)",
              boxShadow: "0 8px 12px rgba(0,0,0,0.15)",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              "& .MuiAccordionSummary-expandIconWrapper": {
                transition: "transform 0.3s ease",
              },
              "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(180deg)",
              },
              ...item.titleSx,
            }}
          >
            <Typography variant="h6" fontWeight="medium">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: 3,
              backgroundColor: "background.paper",
              animation: expanded === item.title ? "fadeIn 0.5s ease-in-out" : "none",
              "@keyframes fadeIn": {
                "0%": {
                  opacity: 0,
                },
                "100%": {
                  opacity: 1,
                },
              },
              ...item.contentSx,
            }}
          >
            {typeof item.content === "string" ? <Typography variant="body1">{item.content}</Typography> : item.content}
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  )
}

