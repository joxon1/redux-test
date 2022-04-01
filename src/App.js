import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./containers/Error";

import Header from "./containers/Header";
import ProductComponents from "./containers/ProductComponents";
import ProductDetails from "./containers/ProductDetails";
import ProductList from "./containers/ProductList";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId"exact component={ProductDetails} />
          <Route path="/productComponents" component={ProductComponents} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
