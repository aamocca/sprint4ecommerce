// import Main from "./components/Main";
// import Header from "./components/Header";
import MenuAdmin from "./components/MenuAdmin";
import "./App.css";
import "./header.css";
import {DarkModeContext} from "./context/DarkModeContext";


function App() {
  return (
    <>
    <DarkModeContext>
      <MenuAdmin />
      </DarkModeContext>
    </>
  );
}

export default App;
