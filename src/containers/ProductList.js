import { useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";

export default function ProductList() {
  const product = useSelector((state) => state);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}
