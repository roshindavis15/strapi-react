import React from 'react';

const SearchWidget = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="sidebar-item search">
                <div className="sidebar-info">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Enter Keyword" name="text" className="form-control" autoComplete='off' required />
                        <button type="submit"><i className="fa-solid fa-search"></i></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchWidget;