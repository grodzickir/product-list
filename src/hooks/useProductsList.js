import {useEffect, useState} from "react";
import {PlentiApi} from "../PlentiApi";

export default function useProductsList() {
    const [productsList, setProductsList] = useState(null)

    useEffect(() => {
        PlentiApi.getAllProducts(setProductsList)
        console.log(productsList)
    }, []);

    return productsList;
}
