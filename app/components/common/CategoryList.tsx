import Wrapper from "../base/Wrapper";
import { useState } from "react";
import { useGlobalContext } from "~/context/globalContext";



export default function CategoryList({ categories }: CategoryListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { setCategory } = useGlobalContext();

  const handleChange = (category: string) => {
    setSelectedCategory((prev) => {
      if (prev === category) {
        setCategory("");
        return null;
      } else {
        setCategory(category);
        return category;
      }
    });
  };

  return (
    <Wrapper>
      {categories &&
        categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              checked={selectedCategory === category}
              onChange={() => handleChange(category)}
              className="w-4 h-4 accent-blue-500"
            />
            {category.replace(/-/g, " ")}
          </div>
        ))}
    </Wrapper>
  );
}

type CategoryListProps = {
  categories: string[];
};