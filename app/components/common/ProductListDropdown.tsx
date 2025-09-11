
import Wrapper from "../base/Wrapper";
import { useGlobalContext } from "~/context/globalContext";

export default function ProductListDropdown() {
    const {sortBy, setSortBy, order, setOrder} = useGlobalContext();


    return(
        <Wrapper>
        <div className="p-4">
            <div className="flex gap-4 mb-4">
                <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded p-2"
                >
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="rating">Discount</option>

                </select>

                <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="border rounded p-2"
                >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
            </div>
        </div>

        </Wrapper>
    )
}

