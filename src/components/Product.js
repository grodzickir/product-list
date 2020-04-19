import React from "react";
import "./ProductList.css";
import Card from "react-bootstrap/Card";

export default function Product({product}) {

    return (
        <Card className="Product w20 m-3">
            <Card.Img className="Card-img" variant="top" src={product.image_url}/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
        </Card>
    )

}
