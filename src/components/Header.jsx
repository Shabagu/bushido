import classes from './style/Header.module.scss'
import logo from '../logo.png'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <div className={classes.title}>Shabagu</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
