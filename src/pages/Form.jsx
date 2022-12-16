import React from "react";
import { Button, Input, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date(),
      Restro: "",
      Address: "",
      price: "",
      speciallity: "",
      Image: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }
  async handleClick() {
    try {
      await axios.post(
        "https://classassignment.onrender.com/products",
        this.state
      );
      alert("Product added!");
    } catch (e) {
      console.log(e.message);
    }
  }
  render() {
    return (
      <SimpleGrid
        w="50%"
        m="auto"
        mt="10%"
        p="2rem"
        borderRadius={"lg"}
        shadow={"lg"}
        gap={"20px"}
      >
        <Input
          type={"text"}
          placeholder="Restaurent name"
          name="Restro"
          onChange={this.handleInputChange}
        />
        <Input
          type={"text"}
          placeholder="Address"
          name="Address"
          onChange={this.handleInputChange}
        />
        <Input
          type={"number"}
          placeholder="Price"
          name="price"
          onChange={this.handleInputChange}
        />
        <Input
          type={"text"}
          placeholder="speciallity"
          name="speciallity"
          onChange={this.handleInputChange}
        />
        <Input
          type={"url"}
          placeholder="Image url"
          name="Image"
          onChange={this.handleInputChange}
        />
        <Button w="20%" colorScheme={"blue"} onClick={this.handleClick}>
          Submit
        </Button>
      </SimpleGrid>
    );
  }
}

export default FormComponent;
