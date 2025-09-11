import { Link } from "react-router";
import Wrapper from "../base/Wrapper";

export default function ProductCard( {title, price, image, id} : ProductCardProps) {

  return (
    <Link
      to={`/productDetails/${id}`}
      className="flex flex-col bg-white  overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto"
    >
      <Wrapper>
        <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={image[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col justify-between flex-1">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 font-medium">${price}</p>
        </div>
      </Wrapper>
    </Link>
  );
}

type ProductCardProps = {
  title: string;
  price: number;
  image: any;
  id: number;
};