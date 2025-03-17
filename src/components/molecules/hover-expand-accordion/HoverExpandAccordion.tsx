"use client";

import type React from "react";
import { useState } from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    type SxProps,
    type Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { Reveal } from "../../utils/Reveal";

interface AccordionItemProps {
    title: string;
    content: string | React.ReactNode;
    defaultExpanded?: boolean
    titleSx?: SxProps<Theme>;
    contentSx?: SxProps<Theme>;
}

interface AccordionProps {
    items: AccordionItemProps[];
    sx?: SxProps<Theme>;
    expandicon?: boolean;
    gap?: number;
    itemAlignCenter?: boolean;
    titleVariant?:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'title1' | 'title2' | 'caption';

}

export default function HoverExpandAccordion({ items, sx, expandicon, titleVariant, gap, itemAlignCenter }: AccordionProps) {
    const [hoveredPanel, setHoveredPanel] = useState<string | false>(items.find((item) => item.defaultExpanded)?.title || false);

    return (
        <Box
            sx={{
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: gap || 4,
                ...sx,
            }}
        >
            {items.map((item, index) => (
                <MuiAccordion
                    key={index}
                    expanded={hoveredPanel === item.title}
                    onMouseEnter={() => setHoveredPanel(item.title)}
                    onMouseLeave={() => setHoveredPanel(false)}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                        mb: 2,
                        width: "100%",
                        display: "flex",    
                        flexDirection:"column",
                        alignItems:{
                            xs: itemAlignCenter ? "center" : "normal",
                            md:"normal"
                        },
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "all 0.4s ease-in-out",
                        boxShadow: hoveredPanel === item.title ? "0 8px 12px rgba(0,0,0,0.15)" : "none",
                        transform: hoveredPanel === item.title ? "scale(1.02)" : "scale(1)",
                        "&:before": { display: "none" },
                    }}
                >
                    <Reveal delay={index * 0.3+0.2}>
                        <AccordionSummary
                            //expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                width: "100%",
                                backgroundColor: "transparent",
                                background: `radial-gradient(circle, primaryBlue, 0%, transparent 70%)`,
                                transition: "background-color 0.3s ease-in-out",
                                //"&:hover": { backgroundColor: "primary.dark" },
                                ...item.titleSx,
                            }}
                        >
                            <TypographyStyles variant={titleVariant || "h6"} color={hoveredPanel === item.title ? "white" : "light-grey"} >
                                {item.title}
                            </TypographyStyles>
                        </AccordionSummary>
                    </Reveal>

                    <AccordionDetails
                        sx={{
                            padding: 3,
                            visibility: hoveredPanel === item.title ? "visible" : "hidden",
                            opacity: hoveredPanel === item.title ? 1 : 0,
                            maxHeight: hoveredPanel === item.title ? "500px" : "0px",
                            overflow: "hidden",
                            transition: "opacity 0.3s ease-in-out, max-height 0.3s ease-in-out, visibility 0.3s ease-in-out",
                            ...item.contentSx,
                        }}
                    >
                        {typeof item.content === "string" ? <Typography variant="body1">{item.content}</Typography> : item.content}
                    </AccordionDetails>
                </MuiAccordion>
            ))}
        </Box>
    );
}
