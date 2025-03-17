import { Box } from "@mui/material"
import CustomAvatar from "../../organisms/avatar/CustomAvatar"
import { TestimonialCardProps } from "../../../types/TestimonialCardProps"

import TypographyStyles from "../../atoms/typography/TypographyStyles"



const TestimonialCard = ({ title, description, AvatarImgSrc, AvatarName, designation }: TestimonialCardProps) => {
    return (
        <Box sx={{
            width:"auto"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 5,
                px:5,
                width:"auto"
            }}>
                <CustomAvatar src={AvatarImgSrc} alt={AvatarName} size={100} />
                <Box>
                    <TypographyStyles variant="h3">"{title}"</TypographyStyles>
                    <TypographyStyles color="light-grey" variant="title1">{description}</TypographyStyles>
                </Box>
                <TypographyStyles highlight="//" variant="title1">{`${AvatarName} // ${designation}`}</TypographyStyles>
            </Box>
        </Box>
    )
}

export default TestimonialCard;