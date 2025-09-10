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
  console.log("response: " + response.json);
  return response.json();
}

export default function Home() {
  const data = useLoaderData();
  return (
  <div>
  <Navbar />
  <ProductDetails/>
  <ShoppingCart/>
  </div>
  );
}
