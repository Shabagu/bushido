import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Ads from './components/Ads';
import { IndentationLeft as IL, IndentationRight as IR } from './components/Indentation';
import Footer from './components/Footer';


import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
        <IL />
          <Navigation />
          <Content />
          <Ads />
        <IR />
      <Footer />
    </div>
  );
}




export default App;
