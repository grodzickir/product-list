import React, {useState} from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Logo from "./components/Logo";
import Search from "./components/Search";
import DeliveryBar from "./components/DeliveryBar";
import DeliverySideBar from "./components/delivery-side-bar/DeliverySideBar";

function App() {

    const [searchQuery, setSearchQuery] = useState(null)
    const [sideBarActive, setSideBarActive] = useState(false)
    const [currentAddress, setCurrentAddress] = useState(null)

    return (
        <div className="App">
            <DeliverySideBar sideBarActive={sideBarActive} setSideBarActive={setSideBarActive}
                             setCurrentAddressOnBar={setCurrentAddress}/>
            <div className="Wrapper">
                <header className="App-header">
                    <nav className="Top-bar">
                        <Logo/>
                        <Search setSearchQuery={setSearchQuery}/>
                        <div className="filler" style={{flex: 1}}/>
                    </nav>
                    <DeliveryBar sideBarActive={sideBarActive} setSideBarActive={setSideBarActive}
                                 currentAddress={currentAddress}/>
                </header>
                <div className="Content">
                    <ProductList searchQuery={searchQuery}/>
                </div>
            </div>
        </div>
    );
}

export default App;
