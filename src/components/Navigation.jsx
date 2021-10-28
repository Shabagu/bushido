import classes from './style/Navigation.module.scss';

function Navigation() {
  return(
    <nav className={classes.nav}>
      {/* NAVIGATION */}
      <div className={classes.item}><a href="/">Profile</a></div>
      <div className={classes.item}><a href="/">Messages</a></div>
      <div className={classes.item}><a href="/">News</a></div>
      <div className={classes.item}><a href="/">Music</a></div>
      <div className={classes.item}><a href="/">Settings</a></div>
    </nav>
  );
}

export default Navigation;
