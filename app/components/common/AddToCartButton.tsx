import { useGlobalContext } from "~/context/globalContext";
import Wrapper from "../base/Wrapper";

export default function AddToCartButton( product: AddToCartButtonProps) {
    const { setCart, cart } = useGlobalContext();

        const addToCart = (product: AddToCartButtonProps) => {
        const existing = cart.find((p) => p.id === product.id);

        let newCart;
        if (existing) {
        newCart = cart.map((p) =>
            p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
        } else {
        newCart = [...cart, { ...product, quantity: 1 }];
        }

        setCart(newCart); 
        localStorage.setItem("cart", JSON.stringify(cart));
        };
    

   

    return(
        <Wrapper>
            <button
            onClick={() => addToCart(product)}
            className="mt-2 px-2 py-1 bg-blue-500 text-white rounded"
        >
            Add to Cart
            </button>
        </Wrapper>
    )    
}


type AddToCartButtonProps = {
  title: string;
  price: number;
  image: any;
  id: number;
};
