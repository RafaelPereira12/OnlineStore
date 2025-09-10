import Wrapper from "../base/Wrapper";
import ProductCard from "../common/ProductCard";

export default function ProductList( data: ProductListProps) {
    console.log(data)
    return(
        <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data &&
                data.products.map((product : any) => {
                  return(
                    <div>
                      <ProductCard title={String(product.title)} price={Number(product.price)} image={product.images}/>
                    </div>
                  )
                }
                )
                }
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
};