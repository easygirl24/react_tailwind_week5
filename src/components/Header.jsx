function Header({darkMode, toggleTheme}) {
    return (
        <header className={darkMode ? "header dark" : "header"}>
            <h1>React User Directory</h1>
            <p>Meet our amazing community of developers!</p>
            <button onClick={toggleTheme}>
                {darkMode ?  "🌟Light Mode" : "🌙 Dark Mode"}
            </button>
        </header>
    );
}

export default Header;