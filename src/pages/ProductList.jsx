import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import BasicUsage from "../components/Modal";
import ProductCard from "../components/ProductCard";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: false,
      uniqueId:"",
      
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }
  async componentDidMount() {
    try {
      let { data } = await axios.get(
        "https://classassignment.onrender.com/products"
      );
      this.setState({ data });
    } catch (e) {
      console.log(e.message);
    }
  }
  async componentDidUpdate() {
    try {
      let { data } = await axios.get(
        "https://classassignment.onrender.com/products"
      );
      this.setState({ data });
    } catch (e) {
      console.log(e.message);
    }
  }
 
 
  async handleDelete(id) {
    try {
      await axios.delete("https://classassignment.onrender.com/products/" + id);
      alert("Deleted");
    } catch (e) {
      console.log(e.message);
    }
  }
  async handleEdit(id) {
    console.log(id);
    this.setState({uniqueId:id})
    this.setState({ flag: true });
  }
  async handleClose() {
    this.setState({ flag: false });
  }
  render() {
    return (
      <SimpleGrid mt="10%" gap={"10px"} columns={[2, 2, 3, 4]}>
        <BasicUsage  id={this.state.uniqueId}  handleClose={this.handleClose} isOpen={this.state.flag} />
        {this.state.data.map((elem) => (
          <ProductCard
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            {...elem}
          />
        ))}
      </SimpleGrid>
    );
  }
}

export default ProductList;
