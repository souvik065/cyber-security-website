import { Box } from "@mui/material"
import CareersHeroSectionImg from "../../../assets/images/career-hero-section-img.png"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import CustomButton from "../../atoms/button/customButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Reveal } from "../../utils/Reveal";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";
import { useTheme } from "@mui/material/styles";


const CareesHeroSection = ()=>{
    const theme = useTheme();

    const handleScrollToPositions = () => {
        const positionsSection = document.getElementById('open-positions');
        positionsSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <Box className="career-hero-container " sx={{ mt:12, borderBottom:"0.1rem solid", borderColor:"borderColor.main" }}>
            <Box className="career-hero-wrap " sx={{
                    mx: { xs: 1, sm: 2, md: 4, lg: 40 }, 
                    p: 2,
                    py:15,
                    gap:3,
                    display:"flex",
                    flexDirection:{xs:"column", sm:"row"}
                }}>
                <Box sx={{display:"flex", flexDirection:"column", gap:4}}>
                    <Reveal SelectionSlidAnimation>
                    <TypographyStyles color="light-grey" highlight="//">// Careeres //</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                    <TypographyStyles variant="h1" highlight="KeyConSek">Come and Join our team at KeyConSek</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                    <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum itaque, pariatur nulla molestias alias veniam magnam velit perferendis repellat, reiciendis eos! Sint tempora nulla repellendus error. Velit, rem debitis.</TypographyStyles>
                    </Reveal>
                    <Box sx={{display:"flex"}}>
                        <Reveal>
                        <CustomButton >Join Us</CustomButton>
                        </Reveal>
                        <Reveal>
                        <CustomButton 
                            variant="text" 
                            endIcon={<FontAwesomeIcon icon={faArrowRight}/>}
                            onClick={handleScrollToPositions}
                        >
                            Browse open positions
                        </CustomButton>
                        </Reveal>
                    </Box>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                    <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                    <Box  component={"img"} src={CareersHeroSectionImg} sx={{
                                width: { xs: "100%", sm: "100%", md: "100%", lg: "145%" },
                                height: "auto",
                            }}/>
                            </FloatingAnimationWrapper>
                </Box>
            </Box>
        </Box>
    )
}

export default CareesHeroSection;