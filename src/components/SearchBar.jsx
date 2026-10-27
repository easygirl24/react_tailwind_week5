function SearchBar ({searchTerm, setSearchTerm}) {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search by name or role..." value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)} aria-label="Search users by name or role"/>
        </div>
    );
}

export default SearchBar;