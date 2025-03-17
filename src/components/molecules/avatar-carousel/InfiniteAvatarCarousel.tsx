import { Box } from "@mui/material"
import "../../../styles/animations.scss"


// Images
import ava1 from "../../../assets/images/avatar-img-1.png"
import ava2 from "../../../assets/images/avatar-img-2.png"
import ava3 from "../../../assets/images/avatar-img-3.png"
import ava4 from "../../../assets/images/avatar-img-4.png"
import ava5 from "../../../assets/images/avatar-img-5.png"
import TestimonialCard from "../testimonial-card/TestimonialCard"
import { useEffect, useRef } from "react"

const data = [
    {
        title: "Test Title",
        description: "dfsdkf sfh sushf shfih shf il",
        AvatarName: "Souvik",
        AvatarImgSrc: ava1,
        designation: "CEO of KrewBee",
    },
    {
        title: "Test Title",
        description: "dfsdkf sfh sushf shfih shf il",
        AvatarName: "Souvik",
        AvatarImgSrc: ava2,
        designation: "CEO of KrewBee",
    },
    {
        title: "Test Title",
        description: "dfsdkf sfh sushf shfih shf il",
        AvatarName: "Souvik",
        AvatarImgSrc: ava3,
        designation: "CEO of KrewBee",
    },
    {
        title: "Test Title",
        description: "dfsdkf sfh sushf shfih shf il",
        AvatarName: "Souvik",
        AvatarImgSrc: ava4,
        designation: "CEO of KrewBee",
    },
    {
        title: "Test Title",
        description: "dfsdkf sfh sushf shfih shf il",
        AvatarName: "Souvik",
        AvatarImgSrc: ava5,
        designation: "CEO of KrewBee",
    }
]




const InfinitAvatarCarousel = () => {

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

    return (
        <Box className="scroller" ref={scrollerRef} sx={{
            my: 20,
        }}>
            <Box className="tag-list scroller__inner" sx={{
                display: "flex",
                p: 5
            }}>
                {data.map((item, index) => (
                    <TestimonialCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        AvatarName={item.AvatarName}
                        AvatarImgSrc={item.AvatarImgSrc}
                        designation={item.designation}
                    />
                ))}
            </Box>


        </Box>
    )
}

export default InfinitAvatarCarousel;