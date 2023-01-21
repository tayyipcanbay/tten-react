import Login from "./pages/login";
import "./styles/app.css";
import Panel from "./pages/panel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/panel" element={<Panel/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}
export default App;