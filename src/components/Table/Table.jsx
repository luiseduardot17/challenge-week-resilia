import React, { useContext } from "react";
import { CadastroContext } from "../../context/CadastroProvider";
import S from "./Table.module.css";

const Table = ({ 
  id,
  nome, 
  turma,
  idade,
}) => {
  
  const {BancoDeDados} = useContext(CadastroContext)

  return (
    <div className={S.container}>
      
      <table>
        <tr>
          <th  className={S.id}>ID</th>
          <th>Nome do Estudante</th>
          <th>Turma</th>
          <th>Idade</th>
        </tr>
        {BancoDeDados.length > 0 ? BancoDeDados.map((BancoDeDados, index) => (
        <tr key={index}>
          <td>{BancoDeDados.id}</td>
          <td>{BancoDeDados.nome}</td>
          <td>{BancoDeDados.turma}</td>
          <td>{BancoDeDados.idade}</td>
        </tr>
        ))
        : <p>vazio 🤔</p>}
      </table>
      
    </div>
  );
};

export default Table;
