
import InfiniteLogoCarousel from '../../components/molecules/logo-carousel/InfiniteLogoCarousel'
import HeroSection from '../../components/organisms/hero-page-section/HeroSection'
import AboutUsSection from '../../components/organisms/home-page-aboutus-section/home-aboutus'
import WhyUs from '../../components/organisms/home-page-whyus/WhyUs'
import GetInTouch from '../../components/organisms/home-page-get-in-touch-section/GetInTouch'
import OurProcess from '../../components/organisms/home-page-our-process-section/OurProcess'
import OurServices from '../../components/organisms/home-page-ourservices-section/OurServices'
import CaseStudiesSection from '../../components/organisms/home-page-CaseStudies-section/CaseStudiesSection'
import InfiniteAvatarCarousel from '../../components/molecules/avatar-carousel/InfiniteAvatarCarousel'
import OurBlogSection from '../../components/organisms/home-page-our-blog/OurBlogSection'

// import TransparentCard from  "../../components/molecules/cards/TransparentCard"
// import CustomIcon from '../../components/atoms/custom-icon/CustomIcon'

// import networkImg from "../assets/images/networkProtection.png";


// Icon
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


function HomePage() {

  return (
    <>
        <HeroSection />
        <InfiniteLogoCarousel size='small' />
        <AboutUsSection/>
        <OurServices/>
        <WhyUs/>
        <OurProcess/>
        <GetInTouch/>
        <CaseStudiesSection/>
        <InfiniteAvatarCarousel /> 
        <OurBlogSection/>
    </>
  )
}

export default HomePage
