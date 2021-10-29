import s from './style/Navigation.module.scss';

function Navigation() {
  return(
    <nav className={s.nav}>
      {/* NAVIGATION */}
      <div className={s.item}><a href="/">Profile</a></div>
      <div className={s.item}><a href="/">Messages</a></div>
      <div className={s.item}><a href="/">News</a></div>
      <div className={s.item}><a href="/">Music</a></div>
      <div className={s.item}><a href="/">Settings</a></div>
    </nav>
  );
}

export default Navigation;
