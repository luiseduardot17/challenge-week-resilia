import React from 'react'
import S from './Form.module.css'

const Form = () => {
  return (
    <section>
        <div className={S.container}>
      <form className={S.form}>
       
        <input type="text" name="estudante" id="estudante" placeholder='Nome do Estudante' required={true}/>
        <input type="text" name="turma" id="turma" placeholder='Turma' required={true}/>
        <input type="number" name="idade" id="idade" placeholder='Idade' required={true}/>
        <input type="submit" value="ENVIAR" className={S.btn}/>
        
        
      </form>
    </div>
    </section>
    
  )
}

export default Form
