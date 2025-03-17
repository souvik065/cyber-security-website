import { Box, Typography } from "@mui/material"
import { CustomCard } from "../../molecules/cards/CustomCard";
import blog1 from "../../../assets/images/our-servce-blog2.png"
import blog2 from "../../../assets/images/image (18).png"
import blog3 from "../../../assets/images/image (20).png"
import blog4 from "../../../assets/images/image (21).png"
import blog5 from "../../../assets/images/image (22).png"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import { Reveal } from "../../utils/Reveal";
import CustomButton from "../../atoms/button/customButton";
import { ArrowRightAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const OurBlogSection = () => {

    // Define the handleCaseStudiesClick function
    const handleBlogClick = () => {
        console.log("Blog clicked");
    }


const navigate = useNavigate();

const handleClick = () => {
  navigate("/our-services#latest-post");
};

    return (
        <Box className="our-blog-container" sx={{ mt: 20 }}>
            <Box className="our-blog-wrap" sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2
                    }}>
                        <Box>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles highlight="//" color="light-grey">// Our Blog //</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles variant="h1" highlight="news & article">Browse our latest news & article</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box>
                            <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet.</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    my: 5
                }}>

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr", lg: "repeat(2, 1fr)" },
                        gap: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",

                    }}>
                        <Reveal>
                            <CustomCard
                                title="Apple"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                                image={blog1}
                                onClick={handleBlogClick}
                                variant="blog"
                                date="12th May 2021"
                                isTag={true}
                                tagValue="News"
                            />
                        </Reveal>

                        <Reveal>                        <CustomCard
                            title="Apple"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog1}
                            onClick={handleBlogClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"
                        />
                        </Reveal>
                    </Box>

                </Box>
                <Box>
                        <CustomButton variant="text" onClick={handleClick} endIcon={<ArrowRightAlt />}>
                            Browse all the articles
                        </CustomButton>

                </Box>
            </Box>
        </Box >
    )
}

export default OurBlogSection;