import { Box } from "@mui/material";
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { Reveal } from "../../utils/Reveal";

const Footer = () => {

    return (
        <Box className="footer-container" sx={{
            border:"0.1rem solid",
            borderColor:"borderColor.main",
        }}>
            <Box className="footer-wrap" sx={{
                mx:{ xs:5, sm:15, md:20, lg:25},
                py:20,
                display:"flex",
                flexDirection:"column",
                gap:5
                }}>
                <div>
                    <Reveal>
                        <TypographyStyles>LOGO</TypographyStyles>
                    </Reveal>
                </div>
                <div>
                    <Reveal>
                    <TypographyStyles>Contact us</TypographyStyles>
                    </Reveal>
                </div>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:1
                }}>
                    <Reveal>
                    <TypographyStyles color="light-grey">Email Addres</TypographyStyles>
                    </Reveal>
                    <Reveal>
                    <TypographyStyles>info@cyberseurity.com</TypographyStyles>
                    </Reveal>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:1
                }}>
                    <Reveal>
                    <TypographyStyles color="light-grey">Phone Number</TypographyStyles>
                    </Reveal>
                    <Reveal>
                    <TypographyStyles>(123) 456 - 7890</TypographyStyles>
                    </Reveal>

                </Box>
            </Box>
        </Box>
    )
}

export default Footer;
