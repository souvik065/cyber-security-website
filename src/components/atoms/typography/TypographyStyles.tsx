import { TypographyProps } from "../../../types/TypographyProps";
import "./TypographyStyles.scss"


const TypographyStyles = ({ className, variant = "body", children, fontWeight, color, highlight, highlightClass = "highlight" }: TypographyProps) => {
    const tagMapping: { [key: string]: keyof JSX.IntrinsicElements } = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        body: "p",
        title1: "h4",
        title2: "h5",
        caption: "span",
    };

    const Tag = tagMapping[variant] || "p";
    const fontWeightClass = `fontWeight-${fontWeight}`;
    const colorClass = `color-${color}`

    // Function to escape special characters in regex
    const escapeRegExp = (string: string) => {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    };

    // Highlight logic
    const renderHighlightedText = (text: string, highlight: string) => {
        if (!highlight) return text;

        const escapedHighlight = escapeRegExp(highlight); // Escape special characters
        const parts = text.split(new RegExp(`(${escapedHighlight})`, "gi"));

        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} className={highlightClass}>
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <Tag className={`typography ${variant} ${fontWeightClass} ${colorClass} ${className}`}>
            {typeof children === "string" && highlight
                ? renderHighlightedText(children, highlight)
                : children}
        </Tag>
    );
}

export default TypographyStyles;