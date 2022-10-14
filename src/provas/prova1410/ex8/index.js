import React, { useState} from 'react'
import './index.scss'




export default function CalcularOrçamento() {

    const [calcular, setCalcular] = useState();
    const [inteira, setInteira] = useState();
    const [meia, setMeia] = useState();
    const [diaSemana, setDiaSemana] = useState("");
    const [nacional, setNacional] = useState(true);
    

    function Ingresso(){
        
      let msg = "";

      if  ( nacional == true )  
          {
            msg  =  (inteira + meia) * 5;
          }
    
      else if  ( diaSemana == "quarta-feira")  
          {
            msg =  (inteira + meia) * 14.25;
          }
    
      else{

          msg = (inteira * 28.50) + (meia * 14.50)
        }
    
           setCalcular(msg);
        }


   




    return (

        <main> 
        <section className='pagina-ingresso'>

            <h1> Calcular Ingresso </h1> 

            <div>
                inteira: <input type='number' value={inteira} onChange={e => setInteira(Number(e.target.value))}/> 
                meia: <input type='number' value={meia} onChange={e => setMeia(Number(e.target.value))}/> 
               dia da semana : <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)}/> 
               nacional: <input type='boolean' value={nacional} onChange={e => setNacional(e.target.value)}/> 
               
                
                <button onClick={Ingresso}> Calcular </button>
            </div>

            <h1> {calcular} </h1>



         </section>


        </main>

    )
}