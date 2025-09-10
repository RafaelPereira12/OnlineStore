
import { Link } from "react-router";
// import { _Navbar } from "./_Navbar";

export const Navbar = () => {
  return (
    <div>
      <figure>
        <img src="" alt="" />
      </figure>
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link to={"/productDetails"}>
        <h1>Product Details</h1>
      </Link>
      <Link to={"/shoppingCart"}>
        <h1>Shopping Cart</h1>
      </Link>
    </div>
  );
};
