import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => {
      const repositories = Response.data;
      const repositoriesName = [];
      repositories.map((repositories) => {
        repositoriesName.push(repositories.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      navigate('/repositories');
    });
  }
  return (
    <S.Container>
      <S.Input className="usuarioInput" name="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;