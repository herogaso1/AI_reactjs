import { useEffect, useState } from "react";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./pages/History";
import Layout from "./components/Layout";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="editor" element={<Editor />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
