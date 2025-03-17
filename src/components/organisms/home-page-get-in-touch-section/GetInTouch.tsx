import { Box } from "@mui/material"
import TypographyStyles from "../../atoms/typography/TypographyStyles"
import CustomButton from "../../atoms/button/customButton"
import { useNavigate } from 'react-router-dom';

// Images
import GetInTouchImg from "../../../assets/images/home-GetInTouch-Img.png"
import { Reveal } from "../../utils/Reveal"

const GetInTouch = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contactus');
    };

    return (
        <Box className="getInTouch-conatiner " sx={{
            py: "5rem",
            height:"80vh",
            border: "0.1rem solid",
            borderColor: "borderColor.main",
            backgroundColor: "borderColor.light",
            backgroundImage: `url(${GetInTouchImg})`,
            backgroundSize: {xs:"80%", md:"40%"},
            backgroundPosition: "85% 90%",
            backgroundRepeat: "no-repeat",
        }}>
            <Box className="getInTouch-wrap" sx={{
                display: "flex",
                mx: { md: "20%" },
                height:"100%",
                alignContent:"center"
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    p:5,
                    gap:3,
                    width:"50%",
                    height:"fit-content",
                    alignSelf:"flex-end"
                    
                }}>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="//" color="light-grey">// Get in Tocuh //</TypographyStyles>
                    </Reveal>
                    <Reveal SelectionSlidAnimation>
                        <TypographyStyles highlight="protecting" variant="h2" >Start protecting your online presence</TypographyStyles>
                    </Reveal>
                    <Box>
                        <Reveal SelectionSlidAnimation>
                            <CustomButton fontSize={20} onClick={handleContactClick}>
                                Get in touch
                            </CustomButton>
                        </Reveal>
                    </Box>
                </Box>
                {/* <Box className="border" sx={{width:"50%"}}>
                    <Box className="border" component={'img'} src={GetInTouchImg} sx={{ width: { md: "85%" } }} />
                </Box> */}
            </Box>
        </Box>
    )
}

export default GetInTouch;