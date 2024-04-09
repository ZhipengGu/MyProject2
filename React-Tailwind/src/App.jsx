import React from "react";
import {Routes, Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import PokedexLayout from "./PokedexLayout";
import PokedexPage from "./PokedexPage";
import Navbar from "./pages/Navbar";

function App() {

  return (
    
    <div className="min-h-screen bg-slate-700 text-white p-2">
      <div> <Navbar /></div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:name" element={<Detail />}/>

        <Route path="/index" element={<PokedexLayout />}>
          <Route index element={<Navigate to="1" replace />} />
          <Route path=":id" element={<PokedexPage />} />
        </Route>
      </Routes>   
    </div>
  )
}

export default App
