export class PlentiApi {

    static url = "https://dev.plenti.app/api/products/all";

    static getAllProducts(setAllProducts) {
        fetch(PlentiApi.url)
            .then(res => res.json())
            .then(json => setAllProducts(json));
    }
}
