import logo from "./logo.svg";
import "./App.css";
import React from "react";
import FormComponent from "./pages/Form";
import ProductList from "./pages/ProductList";
class App extends React.Component {
  render() {
    return (
      <div className="App">
       <FormComponent/>
       <ProductList/>
      </div>
    );
  }
}

export default App;
