import { useLoaderData } from "react-router";
import Wrapper from "~/components/base/Wrapper";
import AddToCartButton from "~/components/common/AddToCartButton";

export default function ProductDetails() {
    const data = useLoaderData();    
    return(
        <Wrapper>
            <img src={data.images[0]} alt={data.title} />
            <div>
                    {data.title}
            </div>
            <div>
                    {data.price}
            </div>
            <div>
                    {data.price}
            </div>
            <div>
                    <text>Product Details</text>
                    {data.description}
            </div>
        <AddToCartButton key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          image={data.images}/>
        </Wrapper>
    )
    
}

export async function loader({ params }: { params: any }) {
    const { id } = params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
}

