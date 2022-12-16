import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

class BasicUsage extends React.Component {
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
  async handleClick() {
    console.log(this.props.id)
    try {
     let {data}= await axios.put(
        "https://classassignment.onrender.com/products/" + this.props.id
      );
      console.log(data)
      alert("Product updated!");
    } catch (e) {
      console.log(e.message);
    }
  }
  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <>
        <Modal isOpen={this.props.isOpen} onClose={this.props.handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid
                w="100%"
                m="auto"
                mt="10%"
                p="2rem"
                borderRadius={"lg"}
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
                <Button
                  w="20%"
                  colorScheme={"blue"}
                  onClick={this.handleClick}
                >
                  Submit
                </Button>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={this.props.handleClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default BasicUsage;
