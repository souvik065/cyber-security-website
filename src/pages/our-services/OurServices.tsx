import { Box } from "@mui/material"
import OurServicesHeroSection from "../../components/organisms/our-services-page-hero-section/OurServicesHeroSection";
import NewsLetterSection from "../../components/organisms/our-services-newsletter-section/NewsLetterSection";
import LastestPostSection from "../../components/organisms/our-services-latest-post/LastestPostSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OurServices = ()=>{

const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

    return (
        <Box sx={{my:15}}>
            <OurServicesHeroSection/>
            <NewsLetterSection/>
            <LastestPostSection/>
        </Box>
    )
}

export default OurServices;