import { useSelector } from "react-redux";

export default function ProductComponents() {
  const products = useSelector((state) => state.allProducts.product);
  const { id, title, category } = products[0];
  return (
    <div className=" four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="img"></div>
          <div className="content">
            <div className="header">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
