import { Box, Typography } from "@mui/material"
import Accordion from "../../molecules/accordion/accordion"


const FAQSection = () => {

    const accordionItems = [
        {
          title: "What is Material UI?",
          content:
            "Material UI is a popular React UI framework that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.",
          defaultExpanded: true,
        },
        {
          title: "How do I install Material UI?",
          content:
            "You can install Material UI using npm or yarn with the command: npm install @mui/material @emotion/react @emotion/styled or yarn add @mui/material @emotion/react @emotion/styled",
          //titleSx: { backgroundColor: "secondary.light", color: "secondary.contrastText" },
        },
        {
          title: "Can I customize Material UI components?",
          content: (
            <Box>
              <Typography variant="body1" >
                Yes, Material UI components are highly customizable using:
              </Typography>
              <Typography component="ul" sx={{ pl: 2 }}>
                <Typography component="li">The sx prop for one-off styling</Typography>
                <Typography component="li">Custom themes for app-wide styling</Typography>
                <Typography component="li">Styled components for complex customizations</Typography>
              </Typography>
            </Box>
          ),
        },
        {
          title: "Is Material UI compatible with TypeScript?",
          content:
            "Yes, Material UI is fully compatible with TypeScript and provides excellent type definitions out of the box, making it easy to build type-safe React applications.",
        },
      ]

    return (
            <Box>
                <Accordion items={accordionItems}/>
            </Box>
        )
}

export default FAQSection
