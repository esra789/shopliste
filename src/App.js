import React from "react";
import { Card } from "react-bootstrap";
import product from './compenent/Product'
import Name from './compenent/Name'
import Price from './compenent/Price'
import Description from './compenent/Description'
import Image from './compenent/Image'

const firstName = ""; // Replace with your first name

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price productprice={product.price} />
          <Description productdescription={product.description} />
          <Image productImage={product.imagePath} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="https://iziway.cm/images/thumbs/0063415_casque-bluetooth-sans-fil-wireless_550.jpeg" alt="Your Image" />}
    </div>
  );
};

export default App;