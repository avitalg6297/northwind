import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <a href="/home">Home</a>
            <br/>
            <a href="/products">Products</a>
            <br/>
            <a href="/about">About</a>
        </div>
    );
}

export default Menu;
