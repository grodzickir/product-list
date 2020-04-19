import React from "react";
import useProductsList from "../hooks/useProductsList";
import Product from "./Product";

export default function ProductList({searchQuery}) {

    const productsList = useProductsList();

    return (
        <div>
            {searchQuery} <br/>
            Product List
            { productsList?.map(product =>
                <Product key={product.id} product={product} />
            ) }
        </div>
    )

}
