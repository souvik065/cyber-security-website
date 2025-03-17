import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { CustomCard } from "../../molecules/cards/CustomCard";
import CustomAvatar from "../avatar/CustomAvatar";
import TypographyWithIcon from "../../atoms/typography-with-icon/TypographyWithIcon";

import ava1 from "../../../assets/images/avatar-img-1.png"
import ava2 from "../../../assets/images/avatar-img-2.png"
import ava3 from "../../../assets/images/avatar-img-3.png"
import ava4 from "../../../assets/images/avatar-img-4.png"
import ava5 from "../../../assets/images/avatar-img-5.png"

import { Android } from "@mui/icons-material";
import { Reveal } from "../../utils/Reveal";

const CaseStudies = () => {
    return (
        <Box className="case-studies-page" sx={{
            mt: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
        }} >
            <Box className="case-studies-page-content" sx={{ width: "100%" }}>
                <Box  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    mx: { lg: 50 }
                }}>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles color="light-grey" highlight="//"> // Case Studies // </TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles variant="h1" highlight="the best"> Discover how we helped the best companies </TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles color="light-grey" variant="title1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad amet veritatis enim, tempora dolor expedita quibusdam ipsum alias earum, accusamus ratione iure quo reiciendis.</TypographyStyles>
                    </Reveal>
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
                mb:20

            }}>
                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"

                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1,
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <CustomAvatar size={50} src={ava1}/>
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                />
                </Reveal>

                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"

                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1,
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <CustomAvatar size={50} src={ava2}/>
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                    />
                </Reveal>
                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"
                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1,
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <CustomAvatar size={50} src={ava3}/>
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                />
                </Reveal>
                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"
                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1,
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <CustomAvatar size={50} src={ava4}/>
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                />
                </Reveal>
                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"
                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: 1,
                            width: "100%",
                            alignItems: "center"
                        }}>
                            <CustomAvatar size={50} src={ava5}/>
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                />
                </Reveal>
                <Reveal>
                <CustomCard
                    title="Financial Sintitute face a Phising Attack"
                    description="djhbsd jhsbdf hsdfbsbfjs jsjfbj sfjsf"
                    variant="simple"
                    footer={
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignContent: "center",
                            px: 1,
                            width: "100%",
                            alignItems: "center",
                        }}>
                            <CustomAvatar size={50} />
                            <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                        </Box>

                    }
                />
                </Reveal>
            </Box>
        </Box>
    )
}

export default CaseStudies;