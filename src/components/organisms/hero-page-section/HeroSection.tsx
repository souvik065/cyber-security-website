import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomButton from "../../atoms/button/customButton";
import CustomIcon from "../../atoms/custom-icon/CustomIcon";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles"
import "./HeroSection.scss"
import { Box } from "@mui/material";

import "../../../styles/animations.scss"

// Images
import heroimg from "../../../assets/images/hero-section-img.png"
import { Reveal } from "../../utils/Reveal";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";

const HeroSection = () => {
    const theme = useTheme();
    return (
        <Box className="hero-container" sx={{
            my: {
                xs: 15,  
                md: 15
            }, 
            width: "100%"
        }}>
            <Box className="hero-wrdaper" sx={{
                mx: {xs: 2, sm: 5, md: 15, lg: 45, xl: 50},  
                textAlign: "center",
                display:"flex",
                flexDirection:"column",
                gap:5
            }}>

                <Box className="hero-contdent" sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:2,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <div className="hero-content-title " >
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="\\" color="light-grey">\\ Welcome to KeyConSek \\</TypographyStyles>
                        </Reveal>
                    </div>
                    <div className="hero-content-heading ">
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles variant="h1" highlight="Safeguard"> Safeguard your online presence today</TypographyStyles>
                        </Reveal>
                    </div>
                    <div className="hero-content-text" >
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles variant="body" color="light-grey">Lorem Lorem ipsum dolor sit amet. ipsum dolor sit, amet cossi
                                quaeexpedita!</TypographyStyles>
                        </Reveal>
                    </div>
                    <Box className="hero-buttons" display={"flex"}>
                        <Reveal>
                            <CustomButton >Get in Touch</CustomButton>
                            </Reveal>
                        <Reveal >
                            <CustomButton variant="text" endIcon={<CustomIcon icon={faArrowRight} />} >Learn More</CustomButton>
                        </Reveal>

                    </Box>
                </Box>
                <Box className="hero-illustrations " sx={{ justifyContent: "center", display: "flex",zIndex:-1 }}>
                    <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}
                    >
                    <Reveal>
                        <Box component={'img'} className="fade-in img-animate" src={heroimg} sx={{ width: { xs: "85%", sm: "90%", md: "90%", lg: "100%" } }} />
                    </Reveal>
                    </FloatingAnimationWrapper>
                </Box>
                <div className="text-ffcenter">
                    <TypographyStyles variant="title1">Supported by companies around the world</TypographyStyles>
                </div>
            </Box>
        </Box>
    )
}

export default HeroSection;