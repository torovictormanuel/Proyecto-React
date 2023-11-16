
import logo from './assets/coffee-cup.svg';
import CartWiget from './cartWiget';

function NavBar() {
  return (
    <nav className="navbar is-fixed-top is-info" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img src={logo} alt='logo' width="112" height="28px" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Inicio
          </a>

          <a className="navbar-item">
            Menu
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Mas
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                Delivery
              </a>
              <a className="navbar-item">
                Vacantes de trabajo
              </a>
              <a className="navbar-item">
                Contacto
              </a>
              <a className="navbar-item">
                Reportar un problema
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className='navbar-item'>
              <CartWiget />
            </div>

            <div className="buttons">
              <a className="button is-white">
                <strong >Registrarse</strong>
              </a>
              <a className="button is-light">
                Acceso
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;