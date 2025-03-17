import "./CustomCard.scss";
import { } from "../../../types/CardProps";
import { Card, CardContent, CardMedia, Box, CardActions, CardHeader, type SxProps, type Theme, IconButton } from "@mui/material";
import { CalendarToday, ArrowForward } from "@mui/icons-material"
import { CustomCardProps, CardVariant } from "../../../types/CardProps";
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { Tag } from "../../atoms/Tag/Tag";
import { useTheme } from "@mui/material/styles";

import NorthEastIcon from "@mui/icons-material/NorthEast";

export const CustomCard: React.FC<CustomCardProps> = ({
    variant = "simple",
    title,
    description,
    content,
    footer,
    image,
    date,
    imagePosition = "left",
    layoutType,
    alignItem = "",
    width,
    height,
    isTag,
    tagValue,
    tagColor,
    customContent,
    onClick,
    sx = {},
}) => {

    const theme = useTheme();

    // Access the primaryBlue color directly as a string
    // This bypasses TypeScript checking for theme properties
    const primaryBlueColor = (theme.palette as any).primaryBlue?.main || "#007BFF";

    // Base styles for all card variants
    const baseStyles: SxProps<Theme> = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        cursor: "pointer",
        p: 2,
        overflow: "hidden",
        "&:hover": {
            boxShadow: 10,
        },
        border: "1px solid",
        borderColor: "borderColor.main"
    }

    // Variant-specific styles
    const variantStyles: Record<CardVariant, SxProps<Theme>> = {
        simple: {
            maxWidth: 500,
            border: "0.1rem solid",
            borderColor: "borderColor.main",
            justifyContent: "center",
            //textAlign:"center"
        },
        blog: {
            maxWidth: {
                xs: "100%",
                sm: 400,
            },
            width: width,
            height: height
        },
        info: {
            border: "0.1rem solid",
            borderColor: "borderColor.main",
            maxWidth: {
                xs: "100%",
                sm: 400,
            },
            
            width: {xs:"100%", sm:"100%", md:"50%"},
            },
    }

    // Combine base styles, variant styles, and custom styles
    const combinedStyles = {
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
    }

    return (
        <Card sx={combinedStyles} >
            <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
                {(variant === "simple") && isTag && (
                    <Tag
                        label={tagValue}
                        color={primaryBlueColor}
                        size="small"
                        variant="filled"
                        style={{ width: 'fit-content', maxWidth: '25rem' }}
                    />
                )}

            </Box>

            <IconButton
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                }}
            >
                <NorthEastIcon />
            </IconButton>
            <Box sx={{
                display: "flex",
                flexDirection: layoutType === "flex" ? "row" : "column",
                alignItems: alignItem,
                height:"100%"
            }}>
                {((variant === "blog" || variant === "info") && imagePosition === "left") && image && (
                    <Box sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image || "/placeholder.svg?height=200&width=400"}
                            alt={title}
                            sx={{
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                        {date && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 8,
                                    right: 8,
                                    borderRadius: 1,
                                    px: 1,
                                    py: 0.5,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <CalendarToday sx={{ fontSize: 14 }} />
                                <TypographyStyles variant="caption">{date}</TypographyStyles>
                            </Box>
                        )}
                    </Box>
                )}

                <CardHeader
                    title={
                        <TypographyStyles variant={variant === "blog" ? "h5" : "h6"}>
                            {title}
                        </TypographyStyles>
                    }
                    subheader={
                        description && (
                            <TypographyStyles variant="title1">
                                {description}
                            </TypographyStyles>
                        )
                    }
                    //avatar={variant === "info" ? <Info color="primary" /> : undefined}
                    sx={{
                        pb: variant === "simple" ? 1 : 2,
                        display: variant === "info" ? "flex" : undefined,
                        alignItems: variant === "info" ? "flex-start" : undefined,
                    }}
                />

                {content && (
                    <CardContent
                        sx={{
                            pt: variant === "simple" ? 0 : undefined,
                            flexGrow: 1,
                        }}
                    >
                        <TypographyStyles
                            variant="body"
                        //   sx={{
                        //     fontSize: variant === "blog" ? "0.875rem" : undefined,
                        //   }}
                        >
                            {content}
                        </TypographyStyles>
                    </CardContent>
                )}
                {customContent && (
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}>
                        {customContent}
                    </CardContent>
                )}

                {((variant === "blog" || variant === "info") && imagePosition === "right") && image && (
                    <Box  sx={{ position: "relative", height:"100%", alighItems: "center", display: "flex", justifyContent: "center", justifyItems: "center" }}>
                        <CardMedia
                            component="img"
                            image={image || "/placeholder.svg?height=200&width=400"}
                            alt={title}
                            sx={{
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                        {date && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 8,
                                    right: 8,
                                    bgcolor: "rgba(255, 255, 255, 0.8)",
                                    borderRadius: 1,
                                    px: 1,
                                    py: 0.5,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <CalendarToday sx={{ fontSize: 14 }} />
                                <TypographyStyles variant="caption">{date}</TypographyStyles>
                            </Box>
                        )}
                    </Box>
                )}
            </Box>

            {(footer || variant === "blog") && (
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: variant === "blog" ? "space-between" : "flex-start",
                        alignItems: "center",
                        mt: 4,
                    }}
                >
                    {footer ||
                        (variant === "blog" ? (
                            <>
                            <Box sx={{display:"flex", gap:2, alignItems:"center"}}>
                                {isTag && (
                                    <Tag
                                        label={tagValue}
                                        color={primaryBlueColor}
                                        size="small"
                                        variant="filled"
                                        style={{ width: 'fit-content', maxWidth: '25rem' }}
                                    />
                                )}
                                <TypographyStyles variant="title2" >
                                    {date}
                                </TypographyStyles>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0.5,
                                        color: "primary.main",
                                        cursor: "pointer",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >

                                    <ArrowForward sx={{ fontSize: 16 }} />
                                </Box>
                            </>
                        ) : null)}
                </CardActions>
            )}
        </Card>
    )
}

