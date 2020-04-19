import React from "react";
import useProductsList from "../hooks/useProductsList";
import Product from "./Product";

export default function ProductList({searchQuery}) {

    const productsList = useProductsList();

    return (
        <div>
            Product List
            {productsList
                ?.filter(product => {
                    return filter(searchQuery, product)
                })
                ?.map(product =>
                    <Product key={product.id} product={product}/>
                )}
        </div>
    )

    function filter(searchQuery, product) {
        return searchQuery == null
            || product.name.toLowerCase().includes(searchQuery.toLowerCase())
            || product.description.toLowerCase().includes(searchQuery.toLowerCase())
    }

}
