import TypographyStyles from "../../atoms/typography/TypographyStyles";
import TypographyWithIcon from "../../atoms/typography-with-icon/TypographyWithIcon";
import CustomImage from "../../atoms/image/CustomImage";
import CustomButton from "../../atoms/button/customButton";
import { useTheme } from "@mui/material/styles"
// Images
import aboutUsImg from "../../../assets/images/about us img.png"

// Icons
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../../utils/Reveal";
import CustomIcon from "../../atoms/custom-icon/CustomIcon";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";
const AboutUsSection = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleAboutUsClick = () => {
        navigate('/about');
    };

    return (
        <Box className="aboutus-container ">
            <Box className="aboutus-wrap " sx={{ 
                                                        display: "flex", 
                                                        justifyContent: "center", 
                                                        flexDirection: { xs: "column", sm: "column", md: "row", lg:"row" }, 
                                                        gap: 5,
                                                        mx:{sx:"2%", sm:"2%", md:"25%",lg:"25%"}
                                                        }}>
                <Box className="aboutus-content " sx={{ 
                                                            width: { xs: "100%", sm:"100%", md: "100%" },
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "center",
                                                            textAlign: {xs:"center", sm:"center", md:"left", lg:"left"},
                                                            gap: 5,
                                                            px:{xs:"3%", sm:"3%", md:"0%", lg:"0%"}
                    }}>
                    <div>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" variant="body" color="light-grey">// About Us //</TypographyStyles>
                        </Reveal>
                    </div>
                    <div className="content-heading">
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="Empowering" variant="h1">Empowering users:
                                Our Cybersecurity commitment
                            </TypographyStyles>
                        </Reveal>
                    </div>
                    <div className="content">
                        <div className="title-with-icon ">
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon iconPlacementPosition="left" icon={<CustomIcon icon={faShieldHalved} />}>Proven Protection</TypographyWithIcon>
                            </Reveal>
                        </div>
                        <div className="title-content">
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, unde!</TypographyStyles>
                            </Reveal>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title-with-icon">
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon icon={<CustomIcon icon={faClock} />} iconPlacementPosition="left"> 24/7 Monitoring</TypographyWithIcon>
                            </Reveal>
                        </div>
                        <div className="title-content">
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, unde!</TypographyStyles>
                            </Reveal>
                        </div>
                    </div>
                    <div>
                        <Reveal SelectionSlidAnimation>
                            <CustomButton variant="primary" onClick={handleAboutUsClick}>
                                Get in Touch
                            </CustomButton>
                        </Reveal>
                    </div>

                </Box>
                <Box className="aboutus-image" sx={{display:{xs:"flex", sm:"flex"}, justifyContent:"center", alignItems:"center"}}>
                    <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} >
                    <Reveal>
                        <CustomImage className="img-animate" source={aboutUsImg} description="About Us Illustration" height={500} />
                    </Reveal>
                    </FloatingAnimationWrapper>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutUsSection;