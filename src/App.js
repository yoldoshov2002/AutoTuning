import './App.css';
import About from './components/About/About';
import Box from './components/Boxs/Box';
import Brend from './components/Brend/Brend';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Image from './components/Image/Image';
import Disc from './components/Popular/Disc';
import Popular from './components/Popular/Popular';
import Zapchas from './components/Popular/Zapchas';

function App() {
  return (
    <div className="App">
          <Header/>
          <Image/>
          <Box/>
          <Popular/>
          <Zapchas/>
          <Disc/>
          <Brend/>
          <About/>
          <Footer/>
    </div>
  );
}

export default App;
