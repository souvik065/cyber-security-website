import CustomButton from "../../atoms/button/customButton"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomIcon from "../../atoms/custom-icon/CustomIcon";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import "./AboutHeroSection.scss"

// Icons
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Images
import globimg from "../../../assets/images/about-page-globeimg.png"
import { Reveal } from "../../utils/Reveal";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";

const AboutHeroSection = () => {
    const theme = useTheme()
    return (
        <Box className="hero-container" >

            <Box
                className="hero-wrap"
                sx={{
                    mx: { xs: 1, sm: 2, md: 4, lg: 40 }, 
                    p: 2,
                }}
            >
                <Box sx={{ display: { xs: "block", md: "flex" } }}>
                    <Box className="about-hero-content " display={'flex'} justifyContent={"center"} flexDirection={'column'}>
                        <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <div>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey" >// About Us //</TypographyStyles>
                            </Reveal>
                        </div>
                        <div>
                            <Reveal SelectionSlidAnimation> 
                            <TypographyStyles variant="h1" highlight="digital frontier">Our Mission: Protecting your digital frontier</TypographyStyles>
                            </Reveal>
                        </div>
                        <div>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, aut.</TypographyStyles>
                            </Reveal>
                        </div>
                        <Box display={'flex'} gap={3}>
                            <Reveal SelectionSlidAnimation>
                            <CustomButton variant="primary"> Join Us </CustomButton>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                            <CustomButton variant="text" endIcon={<CustomIcon icon={faArrowRight} />} > Learn More </CustomButton>
                            </Reveal>
                        </Box>
                        </Box>
                    </Box>
                    <Box className="about-hero-image" display={'flex'} justifyContent={"center"}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} >
                        <Box
                            component="img"
                            src={globimg}
                            alt="Globe Image"
                            sx={{
                                width: { xs: "40%", sm: "50%", md: "75%", lg: "100%" }, 
                                height: "auto",
                                borderRadius: 2,
                            }}
                        />
                        </FloatingAnimationWrapper>
                    </Box>

                </Box>
                <Box display={'flex'} justifyContent={'space-around'} sx={{ my:5 }}>
                    <div>
                        <Reveal SelectionSlidAnimation >
                        <TypographyStyles highlight="%" variant="h1">99%</TypographyStyles>
                        <TypographyStyles >Customer Satisfaction</TypographyStyles>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal SelectionSlidAnimation delay={1}>
                        <TypographyStyles highlight="+" variant="h1">575+</TypographyStyles>
                        <TypographyStyles >Successful Projects</TypographyStyles>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal SelectionSlidAnimation delay={1.5}>
                        <TypographyStyles highlight="M" variant="h1">32M</TypographyStyles>
                        <TypographyStyles >User served</TypographyStyles>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal SelectionSlidAnimation delay={2}>
                        <TypographyStyles highlight="%" variant="h1">240%</TypographyStyles>
                        <TypographyStyles >Company Growth</TypographyStyles>
                        </Reveal>
                    </div>
                </Box>
            </Box>

        </Box>
    )
}

export default AboutHeroSection;