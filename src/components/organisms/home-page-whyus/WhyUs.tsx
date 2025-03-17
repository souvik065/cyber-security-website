import { Box } from "@mui/material";
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import TypographyWithIcon from "../../atoms/typography-with-icon/TypographyWithIcon";
import CustomButton from "../../atoms/button/customButton";
import { useTheme } from "@mui/material/styles"
// Images
import shiledimg from "../../../assets/images/whyus-section-sheild.png"

// Icons
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CustomIcon from "../../atoms/custom-icon/CustomIcon";
import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper";
import { Reveal } from "../../utils/Reveal";


const WhyUs = () => {
    const theme = useTheme()
    return (
        <Box sx={{ my: 25 }} >
            <Box className={'why-us-wrap'}
                sx={{
                    mx: { xs: 1, sm: 10, md: 25, lg: 40 }, // Adjusts margin based on screen size
                    p: 2,
                }}
                display={'flex'}
                flexDirection={"column"}
                gap={5}
            >
                <Box display={'flex'} flexDirection={'row'} justifyContent={"space-between"} >
                    <Box display={'flex'} flexDirection={'column'} gap={2}
                        sx={{
                            width: { xs: '50%', sm: '50%', md: '50%', lg: '50%' }
                        }}
                    >
                        <Box>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles highlight="//" color="light-grey">// Why Us //</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles variant="h2" highlight="expertise">Stay ahead with out Cybersecurity expertise</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                    <Box alignItems={"center"} alignContent={"center"}>
                        <Reveal>
                            <CustomButton variant="primary" size="medium" >Get Started</CustomButton>
                        </Reveal>
                    </Box>
                </Box>
                <Box sx={{
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: { xs: 'column', md: 'row' },
                    gap:5
                }}>
                    <Box
                        flexDirection={'column'}
                        justifyContent={"space-around"}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Box display={'flex'} flexDirection={'column'} gap={2}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon icon={<CustomIcon icon={faCircleCheck} />} iconPlacementPosition="left">Enchanced data protection</TypographyWithIcon>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatem.</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={2}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon icon={<CustomIcon icon={faCircleCheck} />} iconPlacementPosition="left">Proactive security measures</TypographyWithIcon>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quasi?</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                    <Box>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} floatIntensity={25} floatDuration={10} hoverScale={2}>
                            <Box component={"img"} src={shiledimg} alt="shield Image" sx={{
                                width: { xs: "40%", sm: "50%", md: "75%", lg: "60%" },
                                height: "auto",
                                borderRadius: 2,
                            }} />
                        </FloatingAnimationWrapper>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={"space-around"} gap={2}>
                        <Box display={'flex'} flexDirection={'column'} gap={2}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon icon={<CustomIcon icon={faCircleCheck} />} iconPlacementPosition="left">Expert risk management</TypographyWithIcon>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quasi?</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={2}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyWithIcon icon={<CustomIcon icon={faCircleCheck} />} iconPlacementPosition="left">Reliable incident response</TypographyWithIcon>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quasi?</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default WhyUs;