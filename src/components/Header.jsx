import s from './style/Header.module.scss'
import logo from '../logo.png'

function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
          <div className={s.title}>Shabagu</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
