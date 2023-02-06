import React, { useState } from "react";
import "./styles.css";

import axios from "axios";

const Perfil = () => {
  const [data, setData] = useState([]);
  const [perfil, setPerfil] = useState("");
  const [visible, setVisible] = useState(false);

  const handleText = (e) => {
    setPerfil(e.target.value);
    console.log(perfil);
  };

  const handleClick = () => {
    axios
      .get("https://api.github.com/users/VandersonTavares")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setVisible(true)
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="perfil-content">
      <div className="content">
        <h2>Encontre um perfil Github</h2>
        <input
          type="text"
          placeholder="Usuário Github"
          value={perfil}
          onChange={handleText}
        />
        <br />
        <button className="btn btn-primary" onClick={handleClick}>
          Encontrar
        </button>
      </div>

      <div className="perfil-container">
        {visible && (
          <div>
            <div className="img-pic">
              <img src={data.avatar_url} alt="perfil-pic" />
            </div>
            <div className="infos">
              <h5>Informações</h5>
              <p className="p-link">
                <strong>Perfil: </strong>
                {data.url}
              </p>
              <p className="p-info">
                <strong>Seguidores: </strong>
                {data.followers}
              </p>
              <p className="p-info">
                <strong>Localidade: </strong>
                {data.location}
              </p>
              <p className="p-info">
                <strong>Nome: </strong>
                {data.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Perfil;
