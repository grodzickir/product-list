import React, {useState} from "react";
import "./DeliverySideBar.css"
import NewAddressForm from "./NewAddressForm";
import AddressCard from "./AddressCard";

export default function DeliverySideBar({sideBarActive, setSideBarActive, setCurrentAddressOnBar}) {

    const [addresses, setAddresses] = useState([])

    const [showNewAddressForm, setShowNewAddressForm] = useState(false)

    return (
        <div className={"Sidebar " + (sideBarActive ? "active" : "inactive")}>
            <div className="Sidebar-header container d-flex">
                <img className="img w-25 h-25 align-self-center" src="bicycle-icon.png"/>
                <h4>Delivery address</h4>
                <div className="Sidebar-close close" onClick={closeSideBar}>
                    <img src="cross-icon.webp"/>
                </div>
            </div>
            <div className="Sidebar-content container mt-2">
                <div className="NewAddressBar d-flex flex-row-reverse mb-3">
                    <button className="btn btn-primary NewAddressBtn" onClick={showNewAddressFormClicked}>
                        <img src="plus-icon.webp"/>
                    </button>
                </div>
                {
                    addresses.map((a, i) => <AddressCard key={i} address={a} setCurrentAddress={setCurrentAddress}/>)
                }
                {showNewAddressForm ? <NewAddressForm setNewAddress={addNewAddress}/> : null}
            </div>
        </div>
    )

    function showNewAddressFormClicked() {
        setShowNewAddressForm(true)
    }

    function setCurrentAddress(address) {
        let addressesCopy = Array.from(addresses);
        addressesCopy.forEach(a => a.selected = false);
        address.selected = true;
        setAddresses(addressesCopy);
        setCurrentAddressOnBar(address);
    }

    function addNewAddress(address) {
        console.log(address)
        addresses.push(address);
        setCurrentAddress(address);
        setShowNewAddressForm(false);
    }

    function closeSideBar() {
        setSideBarActive(false);
    }

}
