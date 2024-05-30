import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/home"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
          
      </header> */}
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
