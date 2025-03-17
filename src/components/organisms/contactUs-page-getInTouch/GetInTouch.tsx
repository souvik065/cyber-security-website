import { Alert, Box, IconButton, Snackbar, SxProps, Theme, useMediaQuery, useTheme } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles";
import InputField from "../../atoms/input-field/InputField";
import CustomButton from "../../atoms/button/customButton";
import { ContactFormData } from "../../../types/ContactForm";
import { ContactFormErrors } from "../../../types/ContactForm";
import { useState } from "react";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { storeContactForm } from "../../../firebase/firestore";
import { sendContactEmail } from "../../../firebase/sendEmail";
import { Reveal } from "../../utils/Reveal";

// icons
//import SendIcon from "@mui/icons-material/Send"


const GetInTouch = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

    const [errors, setErrors] = useState<ContactFormErrors>({})
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Clear error when user types
        if (errors[name as keyof ContactFormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: ContactFormErrors = {}
        let isValid = true

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
            isValid = false
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
            isValid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
            isValid = false
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required"
            isValid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            // Here you would typically send the form data to your backend
            console.log("Form submitted:", formData)
            try {
                // First try to store in Firebase
                await storeContactForm(formData);
                console.log("Form data stored in Firebase");

                // Then try to send email
                await sendContactEmail(formData);
                console.log("Email sent successfully");
                // Reset form after successful submission
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    message: "",
                })

            } catch (error) {
                console.error("Error submitting form:", error)
                // Show error message to user
                alert("There was an error submitting your form. Please try again.");
            }


            // Reset form after successful submission
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            })

            // Show success message
            setSnackbarOpen(true)
        }
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const [formData, setFormData] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    })

    const containerSx: SxProps<Theme> = {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr", xl: "1fr 1fr" },
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        border: "0.1rem solid",
        borderColor: "borderColor.main",

    }

    const formContainerSx: SxProps<Theme> = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 3,
        maxWidth: "600px",
        p: { xs: 2, sm: 3, md: 4 },
        boxShadow: 3,
        margin: { 
            xs: "0 auto",  // Center on extra small and small screens
            md: "0 0 0 auto"  // Right align on medium and up
        },
        width: "100%",
    }

    const nameFieldsContainerSx: SxProps<Theme> = {
        display: "flex",
        gridTemplateColumns: "1fr",
        gap: 2,
    }

    const infoContainerSx: SxProps<Theme> = {
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        gap: 4,
        p: { xs: 2, sm: 3, md: 4 },
        bgcolor: "primary.main",
        color: "primary.contrastText",
        borderRadius: 2,
    }

    const contactItemSx: SxProps<Theme> = {
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 2,
    }

    return (
        <Box sx={{ 
            my: 15,
            }}>
            <Box className="get-in-touch-wrap" sx={{
                gap: 10,
                display: "flex",
                flexDirection: "column",
            }}>
                {/* Contact us Heading / Title */}
                <Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: 2
                    }}>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="//" color="light-grey">// Get in Touch //</TypographyStyles>
                        </Reveal>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles highlight="today" variant="h1">Contact us today</TypographyStyles>
                        </Reveal>
                        <Reveal SelectionSlidAnimation>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt aut pariatur esse quasi molestiae vero veritatis. Fugit velit sint ad aliquam laudantium itaque accusamus?</TypographyStyles>
                        </Reveal>
                    </Box>
                </Box>

                {/* Contact us form and other content */}
                <Box sx={containerSx}>
                    <Box sx={formContainerSx} >
                        <Box component="form" noValidate sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}>
                            <Box sx={nameFieldsContainerSx}>
                                <Reveal width="100%" delay={1}>
                                <InputField

                                    label="First Name"
                                    name="firstName"
                                    placeholder="First Name"
                                    labelVariant="title1"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={!!errors.firstName}
                                    required
                                />
                                </Reveal>

                                <Reveal width="100%" delay={1.5}>
                                <InputField
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    labelVariant="title1"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={!!errors.lastName}
                                    required
                                />  
                                </Reveal>
                            </Box>
                            <Reveal width="100%" delay={2}>
                            <InputField
                                fullWidth
                                //margin="normal"
                                label="Email"
                                name="email"
                                type="email"
                                labelVariant="title1"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                required
                            />
                            </Reveal>

                            <Reveal width="100%" delay={2.5}>
                            <InputField
                                fullWidth
                                //margin="normal"
                                label="Subject"
                                name="subject"
                                labelVariant="title1"
                                value={formData.subject}
                                onChange={handleChange}
                                error={!!errors.subject}
                                required
                            />
                            </Reveal>

                            <Reveal width="100%" delay={3}>
                            <InputField
                                fullWidth
                                //margin="normal"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                labelVariant="title1"
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                required
                            />
                            </Reveal>

                            <Reveal width="100%" delay={3.5}>
                            <CustomButton
                                type="submit" size="large"
                                onClick={handleSubmit}
                                //endIcon={<SendIcon />} 
                                sx={{ mt: 3 }}
                            >
                                Send Message
                            </CustomButton>
                            </Reveal>
                        </Box>
                    </Box>

                    {/* Information Container */}
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",

                    }}>
                        <Box sx={{
                            border: "0.1rem solid",
                            borderColor: "borderColor.main",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            p: 5
                        }}>
                            <Box>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles variant="h3">More Contact details</TypographyStyles>
                                </Reveal>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, officia.</TypographyStyles>
                                </Reveal>

                            </Box>
                            <Box>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Email address</TypographyStyles>
                                </Reveal>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles variant="title1">info@cybersecurity.com</TypographyStyles>
                                </Reveal>
                            </Box>
                            <Box>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles color="light-grey">Phone number</TypographyStyles>
                                </Reveal>
                                <Reveal SelectionSlidAnimation>
                                <TypographyStyles variant="title1">(123) 456 - 7890</TypographyStyles>
                                </Reveal>
                            </Box>
                        </Box>
                        <Box sx={{
                            border: "0.1rem solid",
                            borderColor: "borderColor.main",
                            height: "100%",
                            p: 5,
                            gap: 2,
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles>Follow us on</TypographyStyles>
                            </Reveal>
                            <Reveal SelectionSlidAnimation>
                            <TypographyStyles color="light-grey">Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</TypographyStyles>
                            </Reveal>
                            <Box sx={{display:"flex", gap:2}}>
                                <Reveal>
                                <IconButton component="a" href="https://www.facebook.com" target="_blank" >
                                    <Facebook />
                                </IconButton>
                                </Reveal>
                                <Reveal>
                                <IconButton component="a" href="https://www.instagram.com" target="_blank" >
                                    <Instagram />
                                </IconButton>
                                </Reveal>
                                <Reveal>
                                <IconButton component="a" href="https://www.twitter.com" target="_blank" >
                                    <Twitter />
                                </IconButton>
                                </Reveal>
                                <Reveal>
                                <IconButton component="a" href="https://www.linkedin.com" target="_blank" >
                                    <LinkedIn />
                                </IconButton>
                                </Reveal>
                            </Box>
                        </Box>
                    </Box>
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
        </Box>
    )
}

export default GetInTouch;