import Wrapper from "~/components/base/Wrapper";
import ProductListCard from "~/components/common/ProductListCard";
import QuantitySelector from "../components/common/QuantitySelector";
import { useGlobalContext } from "~/context/globalContext"
import { useEffect } from "react";


export default function ShoppingCart() {
    const { cart,setCart } = useGlobalContext();

        useEffect(() => {
            if (initialCart.length > 0) {
                    setCart(initialCart);
                }
            }, []);

        useEffect(() => {
            if (cart.length > 0) {
                localStorage.setItem("cart", JSON.stringify(cart));
            } else {
                localStorage.removeItem("cart"); 
            }
        }, [cart]);

        // const initialCart: any[] = (() => {
        // if (typeof window !== "undefined") {
        //     const storedCart = localStorage.getItem("cart");
        //     return storedCart ? JSON.parse(storedCart) : [];
        // }
        // return [];
        // })();

        const initialCart: any[] = (() => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        return parsedCart.length > 0 ? parsedCart : [];
      } catch (error) {
        console.warn("Failed to parse cart from localStorage:", error);
        return [];
      }
    }
  }
  return [];
})();
    
     const removeFromCart = (id: number) => {
        setCart((prev: any) => prev.filter((p: any) => p.id !== id));
        };
    
        const clearCart = () => setCart([]);

            const increaseQuantity = (id: number) => {
            const newCart = cart.map(p =>
            p.id === id ? { ...p, quantity: (p.quantity ?? 1) + 1 } : p
            );
            setCart(newCart);
            };

            const decreaseQuantity = (id: number) => {
            const newCart = 
            cart.map(p =>
                p.id === id ? { ...p, quantity: (p.quantity ?? 1) - 1 } : p
                )
                .filter(p => (p.quantity ?? 1) > 0); 
            setCart(newCart);
        };

        return (
    <Wrapper>
      {cart.length === 0 && <p>Your cart is empty</p>}

      {Array.isArray(cart) &&
        cart.map((product: any) => (
        <div key={product.id} className="border-b py-4">
          <ProductListCard
            title={product.title}
            price={product.price}
            image={product.image}
            id={product.id}
            quantity={product.quantity}
          />

          <QuantitySelector
      quantity={product.quantity || 1}
      onIncrease={() => increaseQuantity(product.id)}
      onDecrease={() => decreaseQuantity(product.id)}
    />

          <button
            onClick={() => removeFromCart(product.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Cart
        </button>
      )}
    </Wrapper>
  );
}