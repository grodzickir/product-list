import React from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="Top-bar">
                    <Logo />
                    <Search />
                    <div className="filler" style={{flex: 1}} />
                </nav>
            </header>
            <div>
                <ProductList />
            </div>
        </div>
    );
}

export default App;
