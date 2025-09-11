import Wrapper from "../base/Wrapper";
import CategoryList from "../common/CategoryList";
import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";
import { useGlobalContext } from "~/context/globalContext";

export default function ProductList( data: ProductListProps) {
    const itemsPerPage = 9;
    const {currentPage} = useGlobalContext();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.products.slice(startIndex, endIndex);

    const pageNumbers: number[] = Array.from(
    { length: Math.ceil(data.products.length / itemsPerPage) },
    (_, i) => i + 1
);
    return(
        <Wrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {currentItems &&
                        currentItems.map((product : any, index : number) => {
                            return(
                            <div key={index}>
                            <ProductCard title={product.title} price={product.price} image={product.images} id={product.id} key={product.id}/>
                            </div>
                            )       
                        }
                    )
                    }
                </div>
                <CategoryList categories={data.categories}/>
            </div>

                <Pagination length={pageNumbers}/>
       </Wrapper>
    )
}

type ProductListProps = {

    data: [
        title: string,
        price: number,
        products: string[],
    ]
    products: string[],
    categories: string[],
};