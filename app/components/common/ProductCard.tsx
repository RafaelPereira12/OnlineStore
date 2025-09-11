import { Link } from "react-router";
import Wrapper from "../base/Wrapper";
import { useGlobalContext } from "~/context/globalContext";

export default function ProductCard( {title, price, image, id} : ProductCardProps) {

    return(
        <Link  to={`/productDetails/${id}`} className="flex flex-col w-[336px] h-[387px]  bg-red-500">
            <Wrapper>
                <img src={image[0]} alt={title} className="w-full h-[336px]" />
                <div className="flex flex-col w-full justify-between">
                    <div className=" justify-self-end">
                        {title}
                    </div>
                    <div>
                        {"$" + price}
                    </div>
                </div>
                <div>{id}</div>
            </Wrapper>
        </Link>
    )
}

type ProductCardProps = {
  title: string;
  price: number;
  image: any;
  id: number;
};