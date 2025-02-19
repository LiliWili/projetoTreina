import './MyThemeSwitcher.css';

function MyThemeSwitcher({ theme, toggleTheme }) {
    const containerStyles = {
        background: theme === "light" ? "#523c67" : "#c392f8",
        width: "50px",
        height: "25px",
        borderRadius: "12.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px",
        cursor: "pointer",
        boxSizing: "border-box",
    };

    const buttonStyles = {
        width: "21px",
        height: "21px",
        borderRadius: "50%",
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        transition: "transform 0.25s ease-out",
        transform: theme === "light" ? "translateX(0)" : "translateX(24px)",
    };

    return (
        <div style={containerStyles} onClick={toggleTheme}>
            <div style={buttonStyles}></div>
        </div>
    );
}

export default MyThemeSwitcher;
