import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),         
  route("/productDetails", "routes/productDetails.tsx"),
route("/shoppingCart", "routes/shoppingCart.tsx")] satisfies RouteConfig;
