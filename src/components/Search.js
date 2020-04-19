import React from "react";
import "./Search.css"
import {DebounceInput} from "react-debounce-input";

export default function Search({setSearchQuery}) {

    return (
        <div className="Search-box">
            <span className="Search">
                <DebounceInput onChange={e => setSearchQuery(e.target.value)}
                               debounceTimeout={500}
                               placeholder="Szukaj..."/>
            </span>
        </div>
    )

}
