import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Desafio Github API</h1>
        <p>DevSuperior - Escola de Programação</p>
        <Link to="/perfil" className="btn btn-primary" role="button">
          Começar
        </Link>
      </div>
    </>
  );
}
export default Home;
