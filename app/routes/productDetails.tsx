import { useLoaderData } from "react-router";
import Wrapper from "~/components/base/Wrapper";
import AddToCartButton from "~/components/common/AddToCartButton";

export default function ProductDetails() {
    const data = useLoaderData();    
    return(
       <Wrapper>
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="flex-1">
      <img
        src={data.images[0]}
        alt={data.title}
        className="w-full h-auto object-cover rounded-md bg-gray-100"
      />
    </div>

    <div className="flex-1 space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{data.title}</h1>
        <p className="text-xl font-bold text-gray-800 mt-2">${data.price}</p>
      </div>

      <AddToCartButton
        key={data.id}
        id={data.id}
        title={data.title}
        price={data.price}
        image={data.images}
      />

      <hr className="border-gray-300" />

      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-1">Product Details</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
      </div>
    </div>
  </div>
</Wrapper>
    )
    
}

export async function loader({ params }: { params: any }) {
    const { id } = params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
}

