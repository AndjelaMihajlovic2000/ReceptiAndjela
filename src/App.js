import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router className='App'>

      <NavBar />
      <Routes>
        {/*  <Route path="/recipes" element={<Recipes/>}/>*/}
      </Routes>
    </Router>
  );
}

export default App;
