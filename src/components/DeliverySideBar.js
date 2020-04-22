import React from "react";
import "./DeliverySideBar.css"

export default function DeliverySideBar({sideBarActive, setSideBarActive}) {

    return (
        <div className={"Sidebar " + (sideBarActive ? "active" : "inactive")}>
            <div className="Sidebar-header">
                <h3>Delivery address</h3>
                <div className="Sidebar-close" onClick={closeSideBar}>
                    <img src="cross-icon.webp"/>
                </div>
            </div>
        </div>
    )

    function closeSideBar() {
        setSideBarActive(false)
    }

}
