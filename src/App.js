import Main from "./components/Main";
import Header from "./components/Header";
import MenuAdmin from "./components/MenuAdmin";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import "./App.css"
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    // <div className="App">
    //   {/* <Header />
    //   <Navbar />
    //   <MenuAdmin />
    // </div>
    <>
    <div className="App">
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>
      <div className="mainsote">
      <Navbar show={showNav} />
      <Main /> 
      </div>
    </div>
    </>
  );
}

export default App;
