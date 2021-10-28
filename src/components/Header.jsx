import './style/Header.scss'
import logo from '../logo.png'

function Header() {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <div className="Header-logo">
          <img src={logo} alt="Logo" />
          <span className="Site-name">Shabagu</span>  
        </div>
      </div>
    </header>
  );
}

export default Header;
