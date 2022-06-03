import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(Response => {
      const repositories = Response.data;
      const repositoriesName = [];
      repositories.map((repositories) => {
        repositoriesName.push(repositories.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      navigate('/repositories');
    })
    .catch(erro => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" name="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { erro ? <S.ErrorMessage>Ocorreu um erro. Tente novamente.</S.ErrorMessage> : '' }
    </S.HomeContainer>
  );
}

export default App;