import ProductCard from "~/components/common/ProductCard";
import type { Route } from "./+types/home";
import { useLoaderData } from "react-router";
import ProductList from "~/components/containers/ProductList";

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
  
  return (
  <div>
   {data &&
      <ProductList data={data} products={data.products}/>
   }
  </div>
  );
}
