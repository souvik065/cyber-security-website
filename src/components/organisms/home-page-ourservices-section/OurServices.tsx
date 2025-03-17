import { Box, IconButton } from "@mui/material"
import NorthEastIcon from '@mui/icons-material/NorthEast';


// Images 
import networkProtection from "../../../assets/images/home-ourservices-networkprotection.png"
import cloudsecurity from "../../../assets/images/home-ourservices-cloudesecurity.png"
import datasecurity from "../../../assets/images/home-oursevices-datasecurity.png"
import networksecurity from "../../../assets/images/home-ourservices-networksecurity.png"
import { Reveal } from "../../utils/Reveal"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomButton from "../../atoms/button/customButton"
import { ArrowRightAlt } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"


const OurServices = () => {
    const navigate = useNavigate();


    const handleOurServicesClick = () => {

        navigate('/our-services');
    };

    return (
        <Box className="ourservices-container" sx={{
            my: 20,
        }}>
            <Box className="ourservices-wrap" sx={{
                mx: { lg: 40, md: 20, sm: 5, xs: 5 },
                display: "flex",
                flexDirection: "column",
                //alignItems:"center",
                justifyContent: "center",
                justifyItems: "center",
                gap: 10,
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    alignItems: "center",
                    gap: 2
                }}>
                    <Box>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Our Services // </TypographyStyles>
                        </Reveal>
                    </Box>
                    <Box>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles variant="h1" highlight="technologies & platforms">We are security experts on all technologies & platforms</TypographyStyles>
                        </Reveal>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3
                }}>
                    <Box sx={{
                        display: "flex",
                        gap: 3
                    }}>
                        <Box className="servces-card" sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: { xs: "row", md: "row" },
                            border: "0.1rem solid",
                            borderRadius: 2,
                            borderColor: "borderColor.main",
                            gap: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            p: 3
                        }}>
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                }}
                            ></IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TypographyStyles>Netwwrok Protection</TypographyStyles>
                                <TypographyStyles variant="title1" color="light-grey">Netwwrok Protection Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla.</TypographyStyles>
                            </Box>
                            <Box component={"img"} src={networkProtection} sx={{ width: "40%", transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                }, }} />
                        </Box>
                        <Box className="servces-card" sx={{
                            position: "relative",
                            display: "flex",
                            border: "0.1rem solid",
                            borderRadius: 2,
                            borderColor: "borderColor.main",
                            flexDirection: { xs: "column", md: "column" },
                            gap: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            p: 3
                        }}>
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                }}
                            ></IconButton>
                            <Box component={"img"} src={datasecurity} sx={{ width: "50%", transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                }, }} />
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TypographyStyles>Data Security</TypographyStyles>
                                <TypographyStyles variant="title1" color="light-grey">Netwwrok Protection Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla.</TypographyStyles>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: 3
                    }}>
                        <Box className="servces-card" sx={{
                            position: "relative",
                            display: "flex",
                            border: "0.1rem solid",
                            borderRadius: 2,
                            borderColor: "borderColor.main",
                            flexDirection: { xs: "column", md: "column" },
                            gap: 5,
                            alignItems: "end",
                            justifyContent: "center",
                            p: 3
                        }}>
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                }}
                            >
                                <NorthEastIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TypographyStyles>Data Security</TypographyStyles>
                                <TypographyStyles variant="title1" color="light-grey">Netwwrok Protection Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla.</TypographyStyles>
                            </Box>
                            <Box component={"img"} src={networksecurity} sx={{ width: "45%", transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                }, }} />

                        </Box>
                        <Box className="servces-card" sx={{
                            position: "relative",
                            display: "flex",
                            border: "0.1rem solid",
                            borderRadius: 2,
                            borderColor: "borderColor.main",
                            flexDirection: { xs: "column", md: "column" },
                            alignItems: "end",
                            justifyContent: "center",
                            gap: 5,
                            p: 3
                        }}>
                            <IconButton
                                sx={{
                                    position: "absolute",
                                    top: 8,
                                    right: 8,
                                }}
                            ></IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <TypographyStyles>Cloud Security</TypographyStyles>
                                <TypographyStyles variant="title1" color="light-grey">Netwwrok Protection Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nulla.</TypographyStyles>
                            </Box>
                            <Box component={"img"} src={cloudsecurity} sx={{ width: "40%", transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                }, }} />

                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
                    <CustomButton >Get in touch</CustomButton>
                    <CustomButton variant="text" endIcon={<ArrowRightAlt />} onClick={handleOurServicesClick}>Browse all our services</CustomButton>
                </Box>
            </Box>
        </Box>
    )
}

export default OurServices