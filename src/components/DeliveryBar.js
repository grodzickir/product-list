import React from "react";
import "./DeliveryBar.css"

export default function DeliveryBar({sideBarActive, setSideBarActive, currentAddress}) {

    return (
        <div className="Delivery-Bar">
            <div className="Delivery-Btn" onClick={sidebarToggle}>
                <img src="bicycle-icon.png"/>
            </div>
            <div className="d-flex flex-column ml-2">
                {currentAddress ?
                    <>
                        <div className="text-justify">
                            {currentAddress?.street}
                        </div>
                        <div className="text-justify">
                            {currentAddress?.city} {currentAddress?.postalCode}
                        </div>
                    </>
                    :
                    <div>
                        [Brak ustawionego adresu]
                    </div>
                }
            </div>
        </div>
    )

    function sidebarToggle() {
        setSideBarActive(!sideBarActive)
    }

}
