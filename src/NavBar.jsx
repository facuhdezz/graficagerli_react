import logo1 from './assets/img/logo_nav2.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center align-items-center">
            <img src={logo1} className="navbar-img" />
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" aria-current="page" href="presupuesto.html">Presupuesto</a>
        </nav>
    )
}

export default NavBar;