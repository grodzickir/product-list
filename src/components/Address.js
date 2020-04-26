export default class Address {
    constructor({city, street, postalCode, selected = false}) {
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
        this.selected = selected;
    }
}
