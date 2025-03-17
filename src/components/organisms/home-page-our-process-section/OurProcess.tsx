import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"

// Images
import OurProcessImg from "../../../assets/images/home-ourProcess-img.png"
import { Reveal } from "../../utils/Reveal"
import { useTheme } from "@mui/material/styles"

import FloatingAnimationWrapper from "../../utils/FloatingAnimationWrapper"
import HoverExpandAccordion from "../../molecules/hover-expand-accordion/HoverExpandAccordion"


const accordionItems = [
        {
            title: "01/ Create an Account",
            content:
                "Material UI is a popular React UI framework that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
            defaultExpanded: true,
        },
        {
            title: "02/ Install our firewall",
            content:
                "You can install Material UI using npm or yarn with the command: npm install @mui/material @emotion/react @emotion/styled or yarn add @mui/material @emotion/react @emotion/styled",
        },
        {
            title: "03/ Setup your netwrork",
            content: "Yes, Material UI components are highly customizable using:",
        },
        {
            title: "04/ Be Protected",
            content:
                "Yes, Material UI is fully compatible with TypeScript and provides excellent type definitions out of the box, making it easy to build type-safe React applications.",
        },
    ]

const OurProcess = () => {
    const theme = useTheme()
    return (
        <Box className="ourProcess-container" sx={{ my: 10 }}>
            <Box className="ourProcess-wrap"
                sx={{
                    mx: { lg: "20%" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 4
                }}
            >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    mx: "10%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2
                }}>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="//" color="light-grey">// Our process //</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles variant="h1" highlight="works">How does it works</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Quae, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit.</TypographyStyles>
                    </Reveal>
                </Box>

                <Box sx={{
                    display: { xs: "block", md: "flex" }
                }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <FloatingAnimationWrapper glowColor={theme.palette.primaryBlue.main} >
                            <Box component={"img"} src={OurProcessImg} sx={{
                                width: { xs: "45%", sm: "50%", md: "55%", lg: "55%" }
                            }} />
                        </FloatingAnimationWrapper>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 10,
                        width: { md: "50%", lg: "50%" },
                        py: 10,
                        px: { xs: 5, lg: 5 }
                    }}>
                        <HoverExpandAccordion items={accordionItems} titleVariant="h4" itemAlignCenter={true}/>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OurProcess;