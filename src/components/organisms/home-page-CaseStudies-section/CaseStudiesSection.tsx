import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { Reveal } from "../../utils/Reveal";
import { CustomCard } from "../../molecules/cards/CustomCard";
import CustomAvatar from "../avatar/CustomAvatar";
import TypographyWithIcon from "../../atoms/typography-with-icon/TypographyWithIcon";
import { Android, ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


// Images
import ava1 from "../../../assets/images/avatar-img-1.png"
import ava2 from "../../../assets/images/avatar-img-2.png"
import ava3 from "../../../assets/images/avatar-img-3.png"
import ava4 from "../../../assets/images/avatar-img-4.png"
//import ava5 from "../../../assets/images/avatar-img-5.png"
import CustomButton from "../../atoms/button/customButton";

const CaseStudiesSection = () => {
    const navigate = useNavigate();

    const handleCaseStudiesClick = () => {
        navigate('/case-studies');
    };

    return (
        <Box className="case-studies-section" sx={{my:15}}>
            <Box className="case-studies-section-content" sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                
                
            }}>
                <Box className="case-studies-section-content-text" sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    
                }}>
                    <Reveal>
                        <TypographyStyles highlight="//" color="light-grey">// Case Studies //</TypographyStyles>
                    </Reveal>
                    <Reveal>
                        <TypographyStyles variant="h1" highlight="world class companies">Discover how we had helped
                            world class companies in the past</TypographyStyles>
                    </Reveal>
                    <Reveal>
                        <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</TypographyStyles>
                    </Reveal>
                </Box>
                <Box>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr", lg: "1fr 1fr" },
                        gap: 2,
                        justifyItems: "center",
                        alignItems: "center",
                        maxWidth: "1000px",
                        p: 2,
                        mb: 10

                    }}>
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
                                    <CustomAvatar size={50} src={ava1} />
                                    <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                                </Box>

                            }
                        />

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
                                    <CustomAvatar size={50} src={ava2} />
                                    <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                                </Box>

                            }
                        />
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
                                    <CustomAvatar size={50} src={ava3} />
                                    <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                                </Box>

                            }
                        />
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
                                    <CustomAvatar size={50} src={ava4} />
                                    <TypographyWithIcon iconPlacementPosition="left" icon={<Android />} variant="title2">Business</TypographyWithIcon>
                                </Box>

                            }
                        />
                    </Box>
                    
                </Box>
                <Box>
                    <CustomButton 
                        variant="text" 
                        endIcon={<ArrowRightAlt />}
                        onClick={handleCaseStudiesClick}
                    >
                        Browse more case studies
                    </CustomButton>
                </Box>
            </Box>
        </Box>
    )
}

export default CaseStudiesSection;
