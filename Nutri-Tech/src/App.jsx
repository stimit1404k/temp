import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"; // Make sure this file exists
import About from "./pages/About";   // Make sure this file exists

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
