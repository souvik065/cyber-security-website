import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import InlineBanner from "../../molecules/banner/Banner";
import { WorkOutline } from "@mui/icons-material";
import { Reveal } from "../../utils/Reveal";

const OpenPosition = () => {
    return (
        <Box className="open-position-section">
            <Box className="open-position-section__container" >
                <Box className="open-position-section__container__content" sx={{my:10}}>
                    <Box className="open-position-section__container__content__text" sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                        mx: { sx: 5, sm: 5, md: 20, lg: 45 },
                        gap: { sx: 10, sm: 0, md: 0 }
                    }}>
                        <Box sx={{
                            width: { sx: "100%", sm: "50%", md: "50%" }
                        }}>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Open positions //</TypographyStyles>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles variant="h1" highlight="positions">Browse our open positions</TypographyStyles>
                            </Reveal>

                        </Box>
                        <Box sx={{
                            width: { sx: "100%", sm: "50%", md: "50%" },
                            alignContent: "center"
                        }} >
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles color="light-grey" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus minus nostrum at maxime recusandae tenetur distinctio, magnam saepe quasi exercitationem.</TypographyStyles>
                            </Reveal>
                        </Box>
                    </Box>
                </Box>
                <Box>
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
    )
}

export default OpenPosition;