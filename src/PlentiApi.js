export class PlentiApi {

    static url = "https://dev.plenti.app/api/products/all";

    static getAllProducts(setAllProducts) {
        fetch(PlentiApi.url)
            .then(res => {
                    let json = res.json();
                    console.log(json);
                    return json;
                }
            )
            .then(json => setAllProducts(json));
    }
}
