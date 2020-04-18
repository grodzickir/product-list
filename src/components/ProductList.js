import React from "react";
import useProductsList from "../hooks/useProductsList";
import Product from "./Product";

export default function ProductList() {

    const productsList = useProductsList();

    return (
        <div>
            Product List
            { productsList?.map(product =>
                <Product key={product.id} product={product} />
            ) }
        </div>
    )

}
