import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import { CustomCard } from "../../molecules/cards/CustomCard"
import blog1 from "../../../assets/images/our-servce-blog2.png"
import blog2 from "../../../assets/images/our-service-blog1.png"
import blog3 from "../../../assets/images/image (20).png"
import blog4 from "../../../assets/images/image (21).png"
import blog5 from "../../../assets/images/image (22).png"


import BreadCrumbs from "../../atoms/breadcrumbs/Breadcrumbs"
import { Reveal } from "../../utils/Reveal"
//import { useState } from "react"

// Define the handleCaseStudiesClick function
const handleCaseStudiesClick = () => {
    console.log("Case study clicked");  
}


//const categories = ["Tech", "Marketing", "Management", "Design"];
  //  const [selectedCategory, setSelectedCategory] = useState("All");
    
const LastestPostSection = () => {

   

    return (
        <Box id={"latest-post"} className="latest-post-section" >
            <Box className="lates-post-section-content" sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "black",

            }}>
                <Box className="latest-post-section-content-text" sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",

                }}>
                    <Box>
                        <Reveal SelectionSlidAnimation>
                        <TypographyStyles variant="h1">Latest Post</TypographyStyles>
                        </Reveal>
                        
                    </Box>
                    <Box>
                    {/* <BreadCrumbs
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            /> */}
                    </Box>
                    
                </Box>
                <Box>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr",sm:"1fr 1fr", lg: "repeat(2, 1fr)" },
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        px:{xs:3, sm:2}
                    }}>
                        <Reveal>
                        <CustomCard
                            title="Apple"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog1}
                            onClick={handleCaseStudiesClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"
                            />
                            </Reveal>
                        <Reveal>
                        <CustomCard
                            title="Android"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog2}
                            onClick={handleCaseStudiesClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"

                        />
                        </Reveal>
                        <Reveal>
                        <CustomCard
                            title="Microsoft"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog3}
                            onClick={handleCaseStudiesClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"
                            
                        />
                        </Reveal>
                        <Reveal>
                        <CustomCard
                            title="Google"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog4}
                            onClick={handleCaseStudiesClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"

                        />
                        </Reveal>
                        <Reveal>
                        <CustomCard
                            title="Facebook"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                            image={blog5}
                            onClick={handleCaseStudiesClick}
                            variant="blog"
                            date="12th May 2021"
                            isTag={true}
                            tagValue="News"
                            />
                        </Reveal>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LastestPostSection