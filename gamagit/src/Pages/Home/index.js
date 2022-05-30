import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(Response => console.log(Response.data));
  }
  return (
    <S.Container>
      <S.Input className="usuarioInput" name="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;