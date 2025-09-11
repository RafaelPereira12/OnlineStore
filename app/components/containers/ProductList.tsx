import CategoryList from "../common/CategoryList";
import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";
import Wrapper from "../base/Wrapper";
import ProductListDropdown from "../common/ProductListDropdown";
import { useGlobalContext } from "~/context/globalContext";

export default function ProductList( data: ProductListProps) {
    const itemsPerPage = 9;
    const {currentPage} = useGlobalContext();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.products.slice(startIndex, endIndex);

    const pageNumbers: number[] = Array.from(
    { length: Math.ceil(data.products.length / itemsPerPage) },
    (_, i) => i + 1);

    
    return(
    <Wrapper>
  <div className="flex justify-between items-center mb-4">
    <ProductListDropdown />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {currentItems &&
        currentItems.map((product: any, index: number) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.images}
            id={product.id}
            key={product.id}
          />
        ))}
    </div>

    <aside className="hidden lg:block">
      <CategoryList categories={data.categories} />
    </aside>
  </div>

  <div className="mt-8 flex justify-center">
    <Pagination length={pageNumbers} />
  </div>
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