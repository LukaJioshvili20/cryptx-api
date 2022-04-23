import './App.css';
// Router
import { useLocation } from 'react-router';
import { Routes, Route, Navigate } from "react-router-dom"
// Pages
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/not-found" element={<PageNotFound/>}/>
        <Route path="*" element={<Navigate to="/not-found" />}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
