import React from "react"
// Router
import { useLocation } from 'react-router';
import { Routes, Route, Navigate } from "react-router-dom"
// Pages
import Home from "./pages/Home"
const PageNotFound = React.lazy(()=> import ('./pages/PageNotFound'))

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/not-found" element={<PageNotFound/>}/>
        <Route path="*" element={<Navigate to="/not-found" />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
