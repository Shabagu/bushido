import './style/Navigation.scss'

function Navigation() {
  return(
    <nav className="Navigation">
      {/* NAVIGATION */}
      <div className="Item"><a href="/">Profile</a></div>
      <div className="Item"><a href="/">Messages</a></div>
      <div className="Item"><a href="/">News</a></div>
      <div className="Item"><a href="/">Music</a></div>
      <div className="Item"><a href="/">Settings</a></div>
    </nav>
  );
}

export default Navigation;
