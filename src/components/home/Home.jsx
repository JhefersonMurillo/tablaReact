import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/pacientes">Pacientes</Link>
        <Link to="/odontologos">Odontologos</Link>
        <Link to="/turnos">Turnos</Link>
      </div>
    </div>
  );
}

export default Home;
