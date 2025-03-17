
import { ReactNode } from 'react';


export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'title1' | 'title2' | 'caption';
    fontWeight?: 'normal' | 'bold';
    color?: 'black' | 'white' | 'light-grey' | 'disabled';
    highlight?: string;
    textAlign?: 'left' | 'center' | 'right';
    highlightClass?: string;
}


export interface TypographyWithIconProps extends TypographyProps {
    children?: JSX.Element | string;
    iconPlacementPosition?: 'left' | 'right';
    icon?: ReactNode
}