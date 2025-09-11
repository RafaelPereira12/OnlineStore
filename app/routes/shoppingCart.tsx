import Wrapper from "~/components/base/Wrapper";
import ProductListCard from "~/components/common/ProductListCard";
import { useGlobalContext } from "~/context/globalContext"

export default function ShoppingCart() {
    const { cart } = useGlobalContext();
    console.log('cart: ', cart);
    
    return(
        <Wrapper>
            {cart &&
                cart.map((product: any, index: number) => {
                    return(
                        <div key={index}>
                            <ProductListCard title={product.title} price={product.price} image={product.image} id={product.id} key={product.id} quantity={product.quantity}/>
                        </div>
                    )
                }
                )
            }
        </Wrapper>
    )
}