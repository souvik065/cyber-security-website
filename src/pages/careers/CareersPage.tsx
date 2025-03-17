import InfinitAvatarCarousel from "../../components/molecules/avatar-carousel/InfiniteAvatarCarousel";
import CareesHeroSection from "../../components/organisms/careeres-page-hero-section/CareeresHeroSection";
import OpenPositions from "../../components/organisms/careeres-page-open-positions/OpenPositions";
import OurPerks from "../../components/organisms/careers-page-our-perks/OurPerks";

const CareersPage = ()=>{
    return(
        <>
        <CareesHeroSection/>
        <OurPerks/>
        <InfinitAvatarCarousel/>
        <OpenPositions/>
        </>
    )
}

export default CareersPage;