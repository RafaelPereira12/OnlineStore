import type { Route } from "./+types/home";
import { Navbar } from "~/Navbar";
import ProductDetails from "./productDetails";
import ShoppingCart from "./shoppingCart";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await fetch('https://dummyjson.com/products');
  
  return response.json();
}

export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
  <div>
   {data &&
    data.products.map((product : any, index : number) => {
      return(
        <div>
          <div>
            {product.id}
          </div>
          <div>
            {product.title}
          </div>
          <div>
            {product.price}
          </div>
          <img src={product.images[0]} alt={product.title} style={{ width: 200 }} />
        </div>
      )
    }
    )
    }
  
  
  </div>
  );
}
