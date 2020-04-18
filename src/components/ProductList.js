import React from "react";
import useProductsList from "../hooks/useProductsList";

export default function ProductList() {

    const productsList = useProductsList();

    return (
        <div>
            Product List
        </div>

    )

}
