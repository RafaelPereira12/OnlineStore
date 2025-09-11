
import Wrapper from "../base/Wrapper";
import { useState } from "react";
import { useGlobalContext } from "~/context/globalContext";

export default function ProductListDropdown() {
    const {sortBy, setSortBy, order, setOrder, setCurrentPage} = useGlobalContext();
    const [sortOption, setSortOption] = useState(`${sortBy}-${order}`);
    
    const handleSortChange = (value: string) => {
    setSortOption(value);
    const [field, dir] = value.split("-");
    setSortBy(field);
    setOrder(dir);
    setCurrentPage(1);
    };

    return(
        <Wrapper>
            <div className="p-4">
                <div className="flex gap-4 mb-4">
                    <select
                    value={sortOption}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border rounded p-2"
                    >
                    <option value="">----</option>
                    <option value="title-asc">Title Asc</option>
                    <option value="title-desc">Title  Desc</option>
                    <option value="price-asc">Price Asc</option>
                    <option value="price-desc">Price Desc</option>
                    <option value="discount-asc">Discount Asc</option>
                    <option value="discount-desc">Discount Desc</option>
                    <option value="rating-asc">Rating Asc</option>
                    <option value="rating-desc">Rating Desc</option>
                    </select>
                </div>
            </div>
        </Wrapper>
    )
}

