import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomButton from "../../atoms/button/customButton";
import { CustomCard } from "../../molecules/cards/CustomCard";
import { CustomAvatar } from "../../organisms/avatar/CustomAvatar";

// Images
import ava1 from "../../../assets/images/avatar-img-1.png"
import ava2 from "../../../assets/images/avatar-img-2.png"
import ava3 from "../../../assets/images/avatar-img-3.png"
import ava4 from "../../../assets/images/avatar-img-4.png"
import ava5 from "../../../assets/images/avatar-img-5.png"
import { Reveal } from "../../utils/Reveal";

const OurTeamSection = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
        }}>
            <Box sx={{display:"flex", flexDirection:"column", mx:{xs:0, sm:0, md:15, lg:35}, justifyContent:"space-between", gap:2}}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:{xs:"center", sm:"center", md:"left", lg:"left"},
                    alignItems:{xs:"center", sm:"center", md:"normal", lg:"normal"},
                    gap:3,
                    
                }}>
                    <TypographyStyles highlight="//" color="light-grey"> // Our Team // </TypographyStyles>
                    <TypographyStyles variant="h1" highlight="amazing">Meet our amazing team</TypographyStyles>
                    <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                    <Box>
                        <CustomButton size="medium">Join us</CustomButton>
                    </Box>
                </Box>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr", lg: "1fr 1fr" },
                    gap: 2,
                    justifyItems: "center",
                    alignItems: "center",
                    maxWidth: "1000px",
                    p: 2,
                    mb:20,
                }}>
                    <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>
                   <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>
                   <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>
                   <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>
                   <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>
                     <Reveal>
                    <CustomCard isTag={true} tagValue="CEO & Co-Founder" variant="simple" customContent={
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, textAlign: "center" }}>
                            <CustomAvatar src={ava1} size={70} />
                            <TypographyStyles>Jhon Carter</TypographyStyles>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                        </Box>
                    } />
                   </Reveal>

                    
                </Box>
            </Box>
        </Box>
    )
}

export default OurTeamSection;