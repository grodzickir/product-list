import React, {useState} from "react";
import "./DeliverySideBar.css"
import NewAddressForm from "./NewAddressForm";

export default function DeliverySideBar({sideBarActive, setSideBarActive, setCurrentAddress}) {

    const [addresses, setAddresses] = useState(null)

    const [showNewAddressForm, setShowNewAddressForm] = useState(false)

    return (
        <div className={"Sidebar " + (sideBarActive ? "active" : "inactive")}>
            <div className="Sidebar-header container d-flex">
                <h4>Delivery address</h4>
                <div className="Sidebar-close" onClick={closeSideBar}>
                    <img src="cross-icon.webp"/>
                </div>
            </div>
            <div className="Sidebar-content container mt-2">
                <div className="NewAddressBar d-flex flex-row-reverse">
                    <button className="btn btn-primary NewAddressBtn" onClick={addAddress}>
                        <img src="plus-icon.webp"/>
                    </button>
                </div>
                {addresses?.map(a =>
                    <div>
                        {a.street} {a.city} {a.postalCode}
                    </div>
                )}

                {showNewAddressForm ? <NewAddressForm setNewAddress={setNewAddress}/> : null}
            </div>
        </div>
    )

    function addAddress() {
        setShowNewAddressForm(true)
    }

    function setNewAddress(address) {
        console.log(address)
        let newAddresses
        if (addresses != null) {
            addresses.push(address)
            newAddresses = addresses;
        } else {
            newAddresses = [address]
        }
        setAddresses(newAddresses)
        setCurrentAddress(address);
        setShowNewAddressForm(false);
    }

    function closeSideBar() {
        setSideBarActive(false)
    }

}
