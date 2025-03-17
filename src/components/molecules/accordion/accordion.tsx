"use client"

import type React from "react"
import { useState } from "react"
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    type SxProps,
    type Theme,
    Box,
} from "@mui/material"
import { Reveal } from "../../utils/Reveal";
import TypographyStyles from "../../atoms/typography/TypographyStyles";


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
    //const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
    const [expanded, setExpanded] = useState<string | false>(items.find((item) => item.defaultExpanded)?.title || false)

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box
            sx={{
                width: "100%",
                //maxWidth: "800px",
                margin: "0 auto",
                //border:"0.1rem solid",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",

                ...sx,
            }}
        >
            {items.map((item, index) => (
                <MuiAccordion
                    key={index}
                    expanded={expanded === item.title}
                    onMouseEnter={() => setExpanded(item.title)}
                    //onMouseLeave={() => setExpanded(false)}
                    onChange={handleChange(item.title)}
                    elevation={0}
                    sx={{
                        mb: 2,
                        width: "100%",
                        backgroundColor: "transparent",
                        borderRadius: "8px",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyItems: "center",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:before": {
                            display: "none",
                        },
                        "&.Mui-expanded": {
                            transform: "scale(1.01)",
                            boxShadow: "0 8px 12px hsla(0, 0.00%, 0.00%, 0.15)",
                        },
                    }}
                >
                    <Reveal>

                        <AccordionSummary
                            //expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                width: "100%",
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

                            <TypographyStyles variant="h6" color={expanded === item.title ? "white" : "light-grey"}>
                                {item.title}
                            </TypographyStyles>

                        </AccordionSummary>
                    </Reveal>

                    <AccordionDetails
                        sx={{
                            padding: 3,
                            animation: expanded === item.title ? "fadeIn 0.5s ease-in-out" : "none",
                            boxShadow:"none",
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
                        {typeof item.content === "string" ? <TypographyStyles variant="title1" color="light-grey">{item.content}</TypographyStyles> : item.content}
                    </AccordionDetails>
                </MuiAccordion>
            ))}
        </Box>
    )
}

