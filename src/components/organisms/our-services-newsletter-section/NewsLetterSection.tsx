import { Alert, Box, Input, Snackbar } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomButton from "../../atoms/button/customButton"
import { useNavigate } from 'react-router-dom';

// Images
import NewsLetterImg from "../../../assets/images/our-services-newsletter.png"
import { Reveal } from "../../utils/Reveal"
import InputField from "../../atoms/input-field/InputField";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { addDoc, db, collection } from "../../../firebase/firebaseConfig";
import { serverTimestamp } from "firebase/firestore";
const NewsLetterSection = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)


    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    const handleSubscribe = async () => {
        if (!email) {
            alert("Please enter your email!");
            return;
        }

        try {
            await addDoc(collection(db, "subscribers"), {
                email: email,
                createdAt: serverTimestamp(),
                timeStamp: new Date(),
            });

            setEmail("");
            setSnackbarOpen(true)
        } catch (error) {
            console.error("Error subscribing:", error);
            alert("Error subscribing!");
        }
    }

    return (

        <motion.div ref={ref} className="getInTouch-container" style={{
            padding: "5rem 0",
            height: "80vh",
            border: "0.1rem solid",
            borderColor: "var(--borderColor-main)",
            backgroundColor: "var(--borderColor-light)",
            backgroundImage: `url(${NewsLetterImg})`,
            backgroundSize: window.innerWidth < 600 ? "80%" :
                window.innerWidth < 768 ? "70%" :
                    window.innerWidth < 960 ? "60%" : "40%",
            backgroundPosition: "85% 90%",
            backgroundRepeat: "no-repeat",
            margin: "5rem 0",
        }}>
            <Box className="getInTouch-wrap" sx={{
                display: "flex",
                mx: { md: "20%" },
                height: "100%",
                alignContent: "center"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 5,
                    gap: 3,
                    width: "50%",
                    height: "fit-content",
                    alignSelf: "flex-end"

                }}>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="//" color="light-grey">// Newsletter //</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="protecting" variant="h2" >Subscribe to our weekly newsletter</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles color="light-grey" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, officiis distinctio aperiam iusto sint.</TypographyStyles>
                    </Reveal>
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center"
                    }}>
                        <Reveal SelectionSlidAnimation >
                            <InputField
                                placeholder="Subscribe"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Reveal>
                        <Reveal SelectionSlidAnimation >
                            <CustomButton fontSize={20} onClick={handleSubscribe}>
                                Subscribe
                            </CustomButton>
                        </Reveal>

                    </Box>
                </Box>
                {/* Success Snackbar */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
                        Your message has been sent successfully!
                    </Alert>
                </Snackbar>
                {/* <Box className="border" sx={{width:"50%"}}>
                    <Box className="border" component={'img'} src={GetInTouchImg} sx={{ width: { md: "85%" } }} />
                </Box> */}
            </Box>
        </motion.div>


    )
}

export default NewsLetterSection;