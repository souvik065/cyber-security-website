import { Box } from "@mui/material"
import Accordion from "../../molecules/accordion/accordion"
import TypographyStyles from "../../atoms/typography/TypographyStyles"


const FAQSection = () => {

    const accordionItems = [
        {
            title: "01/ How can I get in touch with your cyber security experts?",
            content:
                "Material UI is a popular React UI framework that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
            defaultExpanded: true,
        },
        {
            title: "02/ What types of cyber security services do you offer?",
            content:
                "You can install Material UI using npm or yarn with the command: npm install @mui/material @emotion/react @emotion/styled or yarn add @mui/material @emotion/react @emotion/styled",
            //titleSx: { backgroundColor: "secondary.light", color: "secondary.contrastText" },
        },
        {
            title: "03/ What geographic regions do you serve?",
            content: "Yes, Material UI components are highly customizable using: The sx prop for one-off styling, Custom themes for app-wide styling, Styled components for complex customizations",
        },
        {
            title: "04/ Is Material UI compatible with TypeScript?",
            content:
                "Yes, Material UI is fully compatible with TypeScript and provides excellent type definitions out of the box, making it easy to build type-safe React applications.",
        },
    ]

    return (
        <Box className="faq-section-conatiner" sx={{
            my:25,
        }}>
            <Box className="faq-section-wrap" sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:15
            }}>
                <Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2
                    }}>

                        <Box >
                            <TypographyStyles highlight="//" >
                              //  Frequently Asked Questions //
                            </TypographyStyles>
                        </Box>
                        <Box>
                            <TypographyStyles variant="h1" highlight="Question ?" >
                                Have a Question ?
                            </TypographyStyles>
                        </Box>
                        <Box>
                            <TypographyStyles color="light-grey" variant="title1" >
                                We are here to help. Check out our FAQ section to find answers to common questions.
                            </TypographyStyles>
                        </Box>
                    </Box>
                </Box>

                <Accordion items={accordionItems} />
                
            </Box>
        </Box>
    )
}

export default FAQSection
