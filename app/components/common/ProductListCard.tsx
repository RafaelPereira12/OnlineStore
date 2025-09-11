import Wrapper from "../base/Wrapper";

export default function ProductListCard( product : ProductListCardProps) {

    return(
            <Wrapper>
                <div className="flex gap-4">
                    <img src={product.image[0]} alt={product.title} className="w-full h-[336px]" />
                    <div className="flex flex-col w-full justify-between">
                        <div className=" justify-self-end">
                            {product.title}
                        </div>
                        <div>
                            {"$" + product.price}
                        </div>
                    </div>
                    <div>{product.quantity}</div>
                </div>
            </Wrapper>
    )
}

type ProductListCardProps = {
  title: string;
  price: number;
  image: any;
  id: number;
  quantity: number;
};