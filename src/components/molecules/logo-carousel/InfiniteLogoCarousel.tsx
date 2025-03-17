import { useEffect, useRef } from "react";
import "./InfiniteLogoCarousel.scss"
import { InfiniteLogoCarouselProps } from "../../../types/InfiniteLogoCarouselProps";
import CustomLogo from "../../atoms/logo/CustomLogo";
import titok from "../../../assets/company/pngwing.com (1).png"
import twitter from "../../../assets/company/pngwing.com (3).png"
import youtube from "../../../assets/company/pngwing.com (4).png"
import gmail from "../../../assets/company/pngwing.com (5).png"
import { Box } from "@mui/material";



const sampleImages = [
  {
    alt: "Beautiful Sunset",
    src: titok,
  },
  {
    alt: "Mountain View",
    src: twitter,
  },
  {
    alt: "Beach Vibes",
    src: youtube,
  },
  {
    alt: "Beach Vibes",
    src: gmail,
  },
  

];

const InfiniteLogoCarousel = ({images=sampleImages, size}:InfiniteLogoCarouselProps) => {

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if prefers-reduced-motion is enabled
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLDivElement;
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

    // Clone each child for infinite effect
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  const sizeMap: {[key:string]: number}={
    extraSmall: 40,  // 40px
    small: 60,       // 60px
    medium: 100,     // 100px
    large: 140,      // 140px
  };

  const logoSize = sizeMap[size]; 
  return (

    <Box className="scroller" ref={scrollerRef} sx={{my:10}}>
      <div className="tag-list scroller__inner">
        {images && images.map((image, index)=>{
          return(
            <CustomLogo src={image.src} key={index} alt={image.alt} height={logoSize} width={logoSize}/>
          )
        })}
        

      </div>
    </Box>
  );
};

export default InfiniteLogoCarousel;
