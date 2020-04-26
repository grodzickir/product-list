import React from "react";

export default function AddressCard({address, setCurrentAddress}) {

    return (//TODO selected highlight
        <div className="card d-flex flex-row p-2">
            <div className="Address-tick p-1">
                {
                    <img className="img-fluid"
                         src={address.selected ? "tick_icon.png" : "tick_gray_icon.png"}
                         onClick={addressClicked}/>
                }
            </div>
            <div className="Address-content p-2">{address.street} {address.city} {address.postalCode}</div>
        </div>
    )

    function addressClicked() {
        setCurrentAddress(address);
    }

}
