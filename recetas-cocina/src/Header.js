import './Header.css';

function Header(props) {
    return (
        <header>
            <div id="top-header">
                <img id="logo" src={props.logoUrl} alt="" />
                <h1>{props.title}</h1>
            </div>
            <div id="search-bar">
                <input type="search" placeholder={props.placeholder} />
                <button type="">Buscar</button>
            </div>
        </header>
    );
}

export default Header
