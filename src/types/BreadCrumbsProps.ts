export interface BreadcrumbsFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }