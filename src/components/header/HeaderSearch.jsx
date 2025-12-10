const handleSearch = (event) => {
    event.preventDefault()
    event.target.reset()
}

const HeaderSearch = ({ searchClose, openSearch }) => {
    return (
        <>
            <div className={`top-search ${openSearch ? "search-open " : "search-close"}`}>
                <div className="container">
                    <form onSubmit={handleSearch}>
                        <div className="input-group">
                            <span className="input-group-addon search-icon"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control" name='search' placeholder="Search" autoComplete='off' />
                            <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;