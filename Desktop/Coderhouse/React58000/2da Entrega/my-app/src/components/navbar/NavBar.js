import './NavBar.css';
import CartWidget from "../cartwidget/CartWidget.js";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/celular'} className='Option' activeClassName='ActiveOption'>Celulares</NavLink>
                <NavLink to={'/category/tablet'} className='Option' activeClassName='ActiveOption'>Tablets</NavLink>
                <NavLink to={'/category/notebook'} className='Option' activeClassName='ActiveOption'>Notebooks</NavLink>
            </div>
            <div className='Cart'>
            <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
