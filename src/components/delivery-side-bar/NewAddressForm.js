import React from "react";
import "./DeliverySideBar.css";
import {useForm} from "react-hook-form";
import Address from "../Address";

export default function NewAddressForm({setNewAddress}) {

    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        let address = new Address(data.city, data.street, data.postalCode);
        setNewAddress(address);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="street">Ulica i nr</label>
                <input name="street" ref={register({required: true})} className="form-control"/>
            </div>
            <div className="row">
                <div className="col form-group">
                    <label htmlFor="postalCode">Kod pocztowy</label>
                    <input name="postalCode" ref={register({required: true})} className="form-control"/>
                </div>
                <div className="col form-group">
                    <label htmlFor="city">Miasto</label>
                    <input name="city" ref={register({required: true})} className="form-control"/>
                </div>
            </div>
            <input type="submit" className="btn btn-primary"/>
        </form>
    )

}
