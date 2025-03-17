import { Box, Stack } from "@mui/material";
import TypographyStyles from "../../atoms/typography/TypographyStyles";

// Images
import gearImg from "../../../assets/images/hero gear img.png";
import quanlityImg from "../../../assets/images/our-edge-quality.png";
import openness from "../../../assets/images/our-edge-openness.png";
import infraImg from "../../../assets/images/our-edge-infrastructure.png";
import { Reveal } from "../../utils/Reveal";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";
import { useTheme } from "@mui/material/styles"

const OurEdge = () => {
    const theme = useTheme()
    return (
        <Box className="our-edge-section" sx={{ my: 15 }}>
            <Box className="our-edge-wrap"
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    gap: 5
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems:"center",
                    textAlign: "center",
                    gap: 2,
                    mx: { md: 25, lg: 45, xl: 65 },
                }}>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="//" color="light-grey"> // Our edge // </TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles variant="h1" highlight="core edge">The core edge that differentiate us</TypographyStyles>
                    </Reveal>
                </Box>

                <Box sx={{
                    display: "flex",
                    mx: { xs: 1, sm: 2, md: 4, lg: 55, },
                    flexDirection: { xs: 'column', sm: 'row' },
                }}>
                    <Box >
                        <Reveal >
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            textAlign: "center",
                            gap: 2,
                            padding: '1rem',
                            height: "50%"
                        }}>
                            <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} floatIntensity={25} floatDuration={10} hoverScale={2}>
                            <Box
                                component="img"
                                src={quanlityImg}
                                alt="quanlity"
                                width="50%"
                            />
                            </FloatingAnimationWrapper>
                            <TypographyStyles variant="h4">Quality</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                        </Box>
                        </Reveal>
                        <Reveal delay={1.5}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            textAlign: "center",
                            padding: '1rem',
                            gap: 2,
                            height: "50%"

                        }}>
                            <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} floatIntensity={25} floatDuration={10} hoverScale={2}>
                            <Box
                                component="img"
                                src={gearImg}
                                alt="quanlity"
                                width="50%"
                            />
                            </FloatingAnimationWrapper>
                            <TypographyStyles variant="h4">Innovation</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                        </Box>
                        </Reveal>
                    </Box>
                    <Box>
                        <Reveal delay={1}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            textAlign: "center",
                            padding: '1rem',
                            gap: 2,
                            height: "50%"

                        }}>
                            <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} floatIntensity={25} floatDuration={10} hoverScale={2}>
                            <Box
                                component="img"
                                src={openness}
                                alt="quanlity"
                                width="50%"
                            />
                            </FloatingAnimationWrapper>
                            <TypographyStyles variant="h4">Openness</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                        </Box>
                        </Reveal>
                        <Reveal delay={2}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            textAlign: "center",
                            padding: '1rem',
                            gap: 2,
                            height: "50%"

                        }}>
                            <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} floatIntensity={25} floatDuration={10} hoverScale={2}>
                            <Box
                                component="img"
                                src={infraImg}
                                alt="quanlity"
                                width="50%"
                            />
                            </FloatingAnimationWrapper>
                            <TypographyStyles variant="h4">Top Tier Infrastructure</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                        </Box>
                        </Reveal>
                    </Box>

                </Box>



            </Box>

        </Box>

    );

}

export default OurEdge; 