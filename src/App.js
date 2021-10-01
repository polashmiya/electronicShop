import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Electronics from "./pages/Electronics";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NewArrivals from "./pages/NewArrivals";
import { Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart/" exact component={Cart} />
        <Route path="/about/" exact component={About} />
        <Route path="/electronics/" exact component={Electronics} />
        <Route path="/electronics/:id" exact component={SingleProduct} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/new" exact component={NewArrivals} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
