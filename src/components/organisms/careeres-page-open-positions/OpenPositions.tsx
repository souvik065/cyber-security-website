import { Box } from "@mui/material"
import { useState } from "react";
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import BreadCrumbs from "../../atoms/breadcrumbs/Breadcrumbs";
import InlineBanner from "../../molecules/banner/Banner";
import { WorkOutline } from "@mui/icons-material";
import { Reveal } from "../../utils/Reveal";

// Sample Breadcrumbs data
const FilterBreadcrumbs = [
    { id: 1, title: "Software Engineer", category: "Tech" },
    { id: 2, title: "Data Scientist", category: "Tech" },
    { id: 3, title: "Marketing Specialist", category: "Marketing" },
    { id: 4, title: "Product Manager", category: "Management" },
    { id: 5, title: "Graphic Designer", category: "Design" },
];

const OpenPositions = () => {

    const categories = ["Tech", "Marketing", "Management", "Design"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <Box className="open-positions-container" id="open-positions" sx={{my:15}}>
            <Box className="open-positions-wrap">
                <Box>
                    <Box sx={{
                        mx:{xs:5,sm:10, md:25, lg:45},
                        display:"flex",
                        gap:3
                        }}>
                        <Box>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Open positions //</TypographyStyles>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="positions" variant="h1">Browse our open positions</TypographyStyles>
                            </Reveal>
                        </Box>
                        <Box sx={{
                                alignItems:"end",
                                display:"flex"
                        }}>
                            <Reveal SelectionSlidAnimation>
                            <BreadCrumbs
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                            </Reveal>
                        </Box>
                    </Box>
                    <Box sx={{ my: 5 }}>
                        <Reveal width="100%">
                        <InlineBanner
                            title="Frontend Developer"
                            description="We are looking for a React developer with experience in MUI and TypeScript."
                            location="New York, USA"
                            timings="9 AM - 6 PM"
                            additionalDetails={[
                                { icon: <WorkOutline color="secondary" />, text: "Full-time" },
                            ]}
                            actionText="Apply Now"
                            onActionClick={() => alert("Application submitted!")}
                        />
                        </Reveal>
                        <Reveal width="100%">
                        <InlineBanner
                            title="Frontend Developer"
                            description="We are looking for a React developer with experience in MUI and TypeScript."
                            location="New York, USA"
                            timings="9 AM - 6 PM"
                            additionalDetails={[
                                { icon: <WorkOutline color="secondary" />, text: "Full-time" },
                            ]}
                            actionText="Apply Now"
                            onActionClick={() => alert("Application submitted!")}
                        />
                        </Reveal>
                        <Reveal width="100%">
                        <InlineBanner
                            title="Frontend Developer"
                            description="We are looking for a React developer with experience in MUI and TypeScript."
                            location="New York, USA"
                            timings="9 AM - 6 PM"
                            additionalDetails={[
                                { icon: <WorkOutline color="secondary" />, text: "Full-time" },
                            ]}
                            actionText="Apply Now"
                            onActionClick={() => alert("Application submitted!")}
                        />
                        </Reveal>
                        <Reveal width="100%">
                        <InlineBanner
                            title="Frontend Developer"
                            description="We are looking for a React developer with experience in MUI and TypeScript."
                            location="New York, USA"
                            timings="9 AM - 6 PM"
                            additionalDetails={[
                                { icon: <WorkOutline color="secondary" />, text: "Full-time" },
                            ]}
                            actionText="Apply Now"
                            onActionClick={() => alert("Application submitted!")}
                        />
                        </Reveal>
                        <Reveal width="100%">
                        <InlineBanner
                            title="Frontend Developer"
                            description="We are looking for a React developer with experience in MUI and TypeScript."
                            location="New York, USA"
                            timings="9 AM - 6 PM"
                            additionalDetails={[
                                { icon: <WorkOutline color="secondary" />, text: "Full-time" },
                            ]}
                            actionText="Apply Now"
                            onActionClick={() => alert("Application submitted!")}
                        />
                        </Reveal>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default OpenPositions;