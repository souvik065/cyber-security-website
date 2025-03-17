
type Image = {
    src: string;
    alt: string;
}

export interface InfiniteLogoCarouselProps{
    images?: Image[];
    size: "extraSmall" | "small" | "medium" | "large";
}


