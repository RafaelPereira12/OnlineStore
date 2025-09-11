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
            className="w-[60%] bg-gray-800 text-white uppercase text-sm font-semibold py-2 rounded hover:bg-gray-900 active:scale-95 transition-transform"
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
