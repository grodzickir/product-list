import React from "react";
import useProductsList from "../hooks/useProductsList";
import Product from "./Product";
import "./ProductList.css"
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

export default function ProductList({searchQuery}) {

    const productsList = useProductsList();

    return (
        <Container className="Product-list">
            <CardDeck>
                {productsList
                    ?.filter(product => {
                        return filter(searchQuery, product)
                    })
                    ?.map(product =>
                        <Product key={product.id} product={product}/>
                    )}
            </CardDeck>
        </Container>
    )

    function filter(searchQuery, product) {
        return searchQuery == null
            || product.name.toLowerCase().includes(searchQuery.toLowerCase())
            || product.description.toLowerCase().includes(searchQuery.toLowerCase())
    }

}
