import React, {useState} from 'react';
import './App.css';
import ProductList from "./components/ProductList";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {

    const [searchQuery, setSearchQuery] = useState(null)

    return (
        <div className="App">
            <header className="App-header">
                <nav className="Top-bar">
                    <Logo />
                    <Search setSearchQuery={setSearchQuery} />
                    <div className="filler" style={{flex: 1}} />
                </nav>
            </header>
            <div>
                <ProductList searchQuery={searchQuery} />
            </div>
        </div>
    );
}

export default App;
