

```javascript
import { Breadcrumbs, Link, SxProps, Theme } from "@mui/material"
import { BreadcrumbsFilterProps } from "../../../types/BreadCrumbsProps";


const breadcrumbsStyles: SxProps<Theme> = {
    position: "fixed",
    bottom: 16,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
  };


const BreadCrumbs: React.FC<BreadcrumbsFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyles}>
            <Link
                onClick={() => onSelectCategory("All")}
                sx={{ cursor: "pointer", color: selectedCategory === "All" ? "primary.main" : "inherit" }}
            >
                All Jobs
            </Link>
            {categories.map((category) => (
                <Link
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    sx={{ cursor: "pointer", color: selectedCategory === category ? "primary.main" : "inherit" }}
                >
                    {category}
                </Link>
            ))}
        </Breadcrumbs>
    )
}

export default BreadCrumbs;
```