import './App.css';
// Router
import { Routes, Route, Navigate } from "react-router-dom"
// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to="/not-found" />}/>
      </Routes>
    </div>
  );
}

export default App;
