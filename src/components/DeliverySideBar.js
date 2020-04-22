import React, {useState} from "react";
import Address from "./Address";
import "./DeliverySideBar.css"

export default function DeliverySideBar({sideBarActive, setSideBarActive, setCurrentAddress}) {

    const [addresses, setAddresses] = useState(null)

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
                {/*  new address form  */}
            </div>
        </div>
    )

    function addAddress() {
        let address = new Address("test", "test", null)
        let newAddresses
        if (addresses != null) {
            addresses.push(address)
            newAddresses = addresses;
        } else {
            newAddresses = [address]
        }
        console.log(address)
        //show new address dialog
        setAddresses(newAddresses)
        setCurrentAddress(address)
    }

    function closeSideBar() {
        setSideBarActive(false)
    }

}
