import React from "react";
import "./DeliveryBar.css"

export default function DeliveryBar({sideBarActive, setSideBarActive, currentAddress}) {

    return (
        <div className="Delivery-Bar p-1">
            <div className="Delivery-Btn p-1" onClick={sidebarToggle}>
                <img className="img-fluid" src="bicycle-icon.png"/>
            </div>
            <div className="d-flex flex-column ml-4">
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
