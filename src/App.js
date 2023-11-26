import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className=" py-4 px-2">
      <Header></Header>
      
      <Body></Body>
      <Footer/>
    
      <footer></footer>
    </div>
  );
}

export default App;
