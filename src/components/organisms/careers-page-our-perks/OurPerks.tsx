import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import "../../../styles/animations.scss"
// Images
import GlobeImg from "../../../assets/images/career-page-Remote-img.png";
import CareerGrowthImg from "../../../assets/images/career-page-CareerGrowth-img.png";
import FlexibleHoursImg from "../../../assets/images/careere-page-FlexibleHours-img.png";
import GreatCulture from "../../../assets/images/career-page-GreatCulture-img.png";
import MedicalInsuranceImg from "../../../assets/images/career-page-MedicalInsurance-img.png";
import UnlimitedPTOImg from "../../../assets/images/career-page-Remote-img.png";
import { Reveal } from "../../utils/Reveal";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";
import { useTheme } from "@mui/material/styles";


const OurPerks = () => {
    const theme = useTheme();
    return (
        <Box className="ourperks-container">
            <Box className="ourperks-wrap" sx={{
                mx: { lg: 40 },
                display: "flex",
                flexDirection: "column",
                gap: 10,
                my: 15
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    textAlign: "center",
                    alignItems: "center",
                    gap: 1,
                    mx: { xs: 0, sm: 5, md: 15, lg: 20 },

                }}>
                    <Box>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Our perks //</TypographyStyles>
                        </Reveal>
                    </Box>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles variant="h1" highlight="perks">Look at our amazing perks</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus exercitationem dicta cumque ut est aliquam?</TypographyStyles>
                    </Reveal>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                            <Box
                                component="img"
                                src={GlobeImg}
                                alt="GlobeImg"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Remote 100%</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                            <Box
                                component="img"
                                src={CareerGrowthImg}
                                alt="CareerGrowthImg"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Career Growth</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                            <Box
                                component="img"
                                src={UnlimitedPTOImg}
                                alt="UnlimitedPTOImg"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Unlimited PTO</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                            <Box
                                component="img"
                                src={FlexibleHoursImg}
                                alt="FlexibleHoursImg"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Flexible Hours</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main}>
                            <Box
                                component="img"
                                src={GreatCulture}
                                alt="GreatCulture"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Greate Culture</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>


                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2,
                        padding: '1rem',
                        height: "50%",
                        width: {
                            xs: '100%',
                            sm: 'calc(50% - 8px)',
                            md: 'calc(33.333% - 11px)',
                        }
                    }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} >
                            <Box
                                component="img"
                                src={MedicalInsuranceImg}
                                alt="MedicalInsuranceImg"
                                width="50%"
                                className="scale-transition"
                            />
                        </FloatingAnimationWrapper>
                        <TypographyStyles variant="h4">Medical Insurance</TypographyStyles>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veniam.</TypographyStyles>
                    </Box>


                </Box>
            </Box>
        </Box>
    )
}

export default OurPerks;