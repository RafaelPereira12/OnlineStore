import Wrapper from "~/components/base/Wrapper";
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
            {cart.length === 0 && <p className="text-center text-gray-600">Your cart is empty</p>}

            <div className="space-y-4">
              {Array.isArray(cart) &&
                cart.map((product: any) => (
                  <div key={product.id} className="flex flex-col sm:flex-row gap-4 items-center border-b pb-4 p-4 sm:p-6 lg:p-8">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-cover rounded bg-gray-100"
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                      <div className="flex-1">
                        <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                      </div>

                      <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <QuantitySelector
                          quantity={product.quantity || 1}
                          onIncrease={() => increaseQuantity(product.id)}
                          onDecrease={() => decreaseQuantity(product.id)}
                        />

                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-gray-500 hover:text-red-500"
                          title="Remove from cart"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {cart.length > 0 && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </Wrapper>
        );
      }