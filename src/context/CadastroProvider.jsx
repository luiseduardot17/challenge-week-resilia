import React, { createContext, useState } from "react";

export const CadastroContext = createContext();

const CadastroProvider = ({ children }) => {

  const [BancoDeDados, setBancoDeDados] = useState([]);

  const [count, setCount] = useState(0);

  const [infos, setInfos] = useState({
    id: "",
    nome: "",
    turma: "",
    idade: "",
  });

  function handleChange(e, chave) {
    setInfos({ ...infos, [chave]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    setBancoDeDados([...BancoDeDados, infos]);
    setCount(count + 1);

    setInfos({
      id: "",
      nome: "",
      turma: "",
      idade: "",
    });
  }

  const contexto = {
    infos: infos,
    BancoDeDados: BancoDeDados,
    handleChange: handleChange,
    handleClick: handleClick,
  };
  
  return (
    <CadastroContext.Provider value={contexto}>
        {children}
    </CadastroContext.Provider>
  )
};

export default CadastroProvider;
