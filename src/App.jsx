import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pacientes from "./components/pacientes/Pacientes";
import Turnos from "./components/turnos/Turnos";
import NotFound from "./components/notFound404/NotFound";
import Odontologos from "./components/odontologos/Odontologos";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route Route path="/" element={<Home />} />
          <Route Route path="/pacientes" element={<Pacientes />} />
          <Route Route path="/turnos" element={<Turnos />} />
          <Route Route path="/odontologos" element={<Odontologos />} />
          <Route Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
