import React from "react";
import "./DeliveryBar.css"

export default function DeliveryBar({sideBarActive, setSideBarActive, currentAddress}) {

    return (
        <div className="Delivery-Bar">
            <div className="btn Delivery-Btn" onClick={sidebarToggle}>
                <img src="bicycle-icon.png"/>
            </div>
            <span className="address">
                {currentAddress?.street} {currentAddress?.city} {currentAddress?.postalCode}
            </span>
        </div>
    )

    function sidebarToggle() {
        setSideBarActive(!sideBarActive)
    }

}
