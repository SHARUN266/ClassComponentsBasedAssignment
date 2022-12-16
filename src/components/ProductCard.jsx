import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";

class ProductCard extends React.Component {
  render() {
    
    return (
      <Card maxW="sm">
        <CardBody>
          <Image
            src={this.props.Image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{this.props.Restro}</Heading>
            <Text fontWeight={700}>
             {this.props.speciallity}
            </Text>
            <Text>
             {this.props.Address}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {this.props.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={()=>this.props.handleEdit(this.props.id)} variant="solid" colorScheme="green">
             Update
            </Button>
            <Button onClick={()=>this.props.handleDelete(this.props.id)} variant="ghost" colorScheme="red">
             Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }
}

export default ProductCard;
