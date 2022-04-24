import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  return (
    <div>
      <h1>Clinica Dental</h1>
      <div>
        <Link to="/pacientes">Pacientes</Link>
        <Link to="/odontologos">Odontologos</Link>
        <Link to="/turnos">Turnos</Link>
      </div>
    </div>
  );
}

export default Home;
