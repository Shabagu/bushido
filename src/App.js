import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Ads from './components/Ads/Ads';
import { IndentationLeft as IL, IndentationRight as IR } from './components/Indentation/Indentation';
import Profile from './components/Profile/Profile';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
        <IL />
          <Navigation />
          <Profile />
          <Ads />
        <IR />
      <Footer />
    </div>
  );
}

export default App;
