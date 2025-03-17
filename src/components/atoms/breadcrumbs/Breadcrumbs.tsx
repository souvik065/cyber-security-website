import { Breadcrumbs, Link, SxProps, Theme } from "@mui/material"
import { BreadcrumbsFilterProps } from "../../../types/BreadCrumbsProps";


const breadcrumbsStyles: SxProps<Theme> = {
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
  };


const BreadCrumbs: React.FC<BreadcrumbsFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyles}>
            <Link
                onClick={() => onSelectCategory("All")}
                sx={{ cursor: "pointer", color: selectedCategory === "All" ? "primaryBlue.main" : "inherit" }}
            >
                All Jobs
            </Link>
            {categories.map((category) => (
                <Link
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    sx={{ cursor: "pointer", color: selectedCategory === category ? "primaryBlue.main" : "inherit" }}
                >
                    {category}
                </Link>
            ))}
        </Breadcrumbs>
    )
}

export default BreadCrumbs;