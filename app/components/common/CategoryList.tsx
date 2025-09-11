import { useState } from "react";
import Wrapper from "../base/Wrapper";
import { useGlobalContext } from "~/context/globalContext";



export default function CategoryList( categories : CategoryListProps) {
    const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
    const { setCategory } = useGlobalContext();

      const handleChange = (category: string) => {
            setChecked((prev) => ({
            ...prev,
            [category]: !prev[category] 
            }));
            if(!!checked[category] === true)
            {
                setCategory("");
            }
            else
            {
                setCategory(category);
            }
        };

    return(
        <Wrapper>
                 {categories&&
                    categories.categories.map((category: any) => {
                    return(
                        <div key={category}>
                            <input
                            type="checkbox"
                            id="terms"
                            checked={!!checked[category]}
                            onChange={() => handleChange(category)}
                            className="w-4 h-4 accent-blue-500"
                        />
                            {category.replace(/-/g, " ")}
                        </div>
                    )
                    }
                    )
                 }
       </Wrapper>
    )
}

type CategoryListProps = {

    categories: string[],
};