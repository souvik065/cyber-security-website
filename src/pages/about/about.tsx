
import FAQSection from "../../components/organisms/about-us-faq-section/FAQSection";
import AboutHeroSection from "../../components/organisms/about-us-page-hero-section/AboutHeroSection";
import OpenPosition from "../../components/organisms/about-us-page-open-positions/OpenPositionSection";
import OurEdge from "../../components/organisms/about-us-page-our-edge-section/OurEdge";
import OurTeamSection from "../../components/organisms/about-us-page-our-team/OurTeamSection";


const AboutPage= ()=>{
    return (
        <>
            <AboutHeroSection/>
            <OurEdge/>
            <OurTeamSection/>
            <OpenPosition/>
            <FAQSection/>
        </>
    )
}

export default AboutPage;