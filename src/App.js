import Login from "./pages/login";
import "./styles/app.css";
import Ask from "./pages/ask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/ask" element={<Ask/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}
export default App;