import React, { useContext} from 'react'
import { CadastroContext } from '../../context/CadastroProvider';
import S from './Form.module.css'

const Form = () => {

  const {infos, handleChange, handleClick} = useContext(CadastroContext);

  return (
    <section>
        <div className={S.container}>
      <form className={S.form}>
       
        <input type="text" name="estudante" id="estudante" placeholder='Nome do Estudante' required={true} value={infos.nome}
          onChange={(e) => handleChange(e, "nome")}/>
        <input type="text" name="turma" id="turma" placeholder='Turma' required={true} value={infos.turma}
          onChange={(e) => handleChange(e, "turma")}/>
        <input type="number" name="idade" id="idade" placeholder='Idade' required={true} value={infos.idade}
          onChange={(e) => handleChange(e, "idade")}/>
        <input type="submit" value="ENVIAR" className={S.btn} onClick={handleClick}/>
        
        
      </form>
    </div>
    </section>
    
  )
}

export default Form
