import React from "react";
import S from "./Table.module.css";

const Table = () => {
  return (
    <div className={S.container}>
      <table>
        <tr>
          <th>#</th>
          <th>Nome do Estudante</th>
          <th>Turma</th>
          <th>Idade</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Pedro Silva</td>
          <td>T10</td>
          <td>19</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Debora Lopes</td>
          <td>T10</td>
          <td>25</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Barbara Ruiz</td>
          <td>T4</td>
          <td>22</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Vitor Vasconcelos</td>
          <td>T4</td>
          <td>30</td>
        </tr>
    
      </table>
    </div>
  );
};

export default Table;
