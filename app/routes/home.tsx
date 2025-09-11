import type { Route } from "./+types/home";
import ProductList from "~/components/containers/ProductList";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useGlobalContext } from "~/context/globalContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export async function loader() {
  const [productsList, categories] = await Promise.all([
    fetch("https://dummyjson.com/products?limit=0"),
    fetch("https://dummyjson.com/products/category-list")
  ]);

  const productsListData = await productsList.json();
  const categoriesData = await categories.json();
  return {
    products: productsListData.products,
    categories: categoriesData
  };
}

export default function Home() {
  const data = useLoaderData();
  const { products, categories } = useLoaderData() as {
    products: [ title: string,
        price: number,
        products: string[],];
    categories: string[];
  };
  const { category, sortBy, order, setCategory } = useGlobalContext();
  const [response, setResponse] = useState(Object);



  useEffect(() => {
    async function fetchProducts() {
       if(category != "" && sortBy == "") {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        setResponse(await response.json());
        } else if(sortBy != "" ) {
        const response = await fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`);
        setResponse(await response.json());
        setCategory("");
        }
      }
      fetchProducts();
}, [category, sortBy, order])

  return (
    <div>
      {
        response?.products?.length && category !== "" || response?.products?.length && sortBy !== "" 
          ? <ProductList data={response.products} products={response.products} categories={categories} />
          : data?.products?.length 
          ? <ProductList data={data.products} products={data.products} categories={categories} />
          : null
        }
    </div>
  );
}
