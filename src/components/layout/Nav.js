import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="container">
            <div className="nav">
                <ul className="slider-menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;