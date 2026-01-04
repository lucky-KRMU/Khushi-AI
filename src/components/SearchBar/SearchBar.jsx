import React from 'react';
import "../../CSS/SearchBar.css";


function SearchBar () {
    return(
        <>
            <div className="search-box">
                <input type="text" 
                placeholder='Enter your News article here...' 
                name="search-box-input-text" 
                id="search-box-input-text" />

                <button id="go-btn" title='Go with the search...?'>&#10162;</button>
            </div>
        </>
    );
}

export default SearchBar;