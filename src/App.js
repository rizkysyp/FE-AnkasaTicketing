import "./App.css";
import Router from "./Config/router";
import NavbarComponent from "../src/Components/base/header";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router />
    </div>
  );
}

export default App;
