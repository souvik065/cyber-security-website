import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import { Reveal } from "../../utils/Reveal";
import { Tag } from "../../atoms/Tag/Tag";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButton from "../../atoms/button/customButton";

//Images
import blog1 from "../../../assets/images/our-servce-blog2.png"
import blog2 from "../../../assets/images/our-service-blog1.png"


const OurServicesHeroSection = () => {

    const theme = useTheme();
    return (
        <Box className="our-services-hero-section">
            <Box className="our-services-hero-section-content">
                <Box className="our-services-hero-section-content-title">
                    <Box className="our-services-hero-section-content-title-text" sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        textAlign: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Our Services //</TypographyStyles>
                        </Reveal>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "65%", lg: "30%" } }}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles highlight="news & articles" variant="h1">Browse our news & articles</TypographyStyles>
                            </Reveal>
                        </Box>

                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "40%" } }}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quasi?</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                </Box>
                <Box className="our-services-hero-section-news-and-arrticles" sx={{
                    mx: { xs: 2, sm: 5, md: 10, lg: 40 },
                    display : "flex",
                    flexDirection: "column",
                }}>
                    <Reveal>
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: "center",
                            my: 5,
                            gap: 2,
                            p: 2,
                        }}>
                            <Box component={"img"} src={blog1} sx={{
                                width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                                border: "0.1rem solid",
                                borderColor: "borderColor.main",
                                borderRadius: 2,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }} />
                            <Box>
                                <Box sx={{ display: "flex", gap: 2, flexDirection: "column", borderBottom: "0.1rem solid", borderColor: "borderColor.main", pb: 2 }}>
                                    <TypographyStyles variant="h3">The importance of encryption in
                                        safeguarding your data online</TypographyStyles>
                                    <TypographyStyles color="light-grey" variant="title1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quasi?</TypographyStyles>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, pt: 2 }}>
                                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                                        <Tag variant="filled" color={theme.palette.primaryBlue.main} label="News" />
                                        <TypographyStyles variant="title1">May 29, 2025</TypographyStyles>
                                    </Box>
                                    <CustomButton variant="text" endIcon={<ArrowForwardIcon />}>Read articles</CustomButton>
                                </Box>

                            </Box>
                        </Box>
                    </Reveal>

                    <Reveal>
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "column", md: "row" },
                            justifyContent: "center",
                            alignItems: "center",
                            my: 5,
                            gap: 2,
                            p: 2,
                        }}>

                            <Box>
                                <Box sx={{ display: "flex", gap: 2, flexDirection: "column", borderBottom: "0.1rem solid", borderColor: "borderColor.main", pb: 2 }}>
                                    <TypographyStyles variant="h3">The importance of encryption in
                                        safeguarding your data online</TypographyStyles>
                                    <TypographyStyles color="light-grey" variant="title1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quasi?</TypographyStyles>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, pt: 2 }}>
                                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                                        <Tag variant="filled" color={theme.palette.primaryBlue.main} label="News" />
                                        <TypographyStyles variant="title1">May 29, 2025</TypographyStyles>
                                    </Box>
                                    <CustomButton variant="text" endIcon={<ArrowForwardIcon />}>Read articles</CustomButton>
                                </Box>

                            </Box>
                            <Box component={"img"} src={blog2} sx={{
                                width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                                border: "0.1rem solid",
                                borderColor: "borderColor.main",
                                borderRadius: 2,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }} />
                        </Box>
                    </Reveal>
                </Box>
            </Box>
        </Box>
    )
}

export default OurServicesHeroSection;