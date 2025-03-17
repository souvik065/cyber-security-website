import CustomButton from "../../atoms/button/customButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../../atoms/custom-icon/CustomIcon";
import "./Navbar.scss"
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="nav-container ">
            <Box className="nav-logo-section" sx={{cursor:"pointer"}} onClick={() => navigate("/")}>LOGO</Box>
            <div className="nav-button-section ">
                <CustomButton variant="text" endIcon={<CustomIcon icon={faArrowRight} />}>Login</CustomButton>
                <CustomButton variant="primary" fontSize={15} > Get in Touch</CustomButton>
            </div>
        </div>
    )
}

export default Navbar;