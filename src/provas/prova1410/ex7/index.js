import React, { useState} from 'react'
import './index.scss'




export default function CalcularOrçamento() {

    const [calcular, setCalcular] = useState();
    const [ganhos, setganhos] = useState([]);
    const [gastos, setgastos] = useState([]);
    

    function Orçamento(){
        let qtd = gastos / ganhos;
        let total = qtd * 100;
        let msg = "";

        if  ( total  > 100)  {
            msg  =  "para de gastar"
          }
    
        else if  ( total > 80 )  {
            msg =  "cuidado, seu orçamento pode ficar comprometido"
          }
    
        else if  ( total > 50  )  {
            msg  =  "atencao, melhor conter os gastos"
          }
    
        else if  ( total > 20 )  {
            msg =   "muito bem, seus gastos nao ultrapassam metade dos ganhos!"
          }
    
        else if  ( total >= 0 )  {
            msg  =  "parabens, está gerenciando bem seu orçamento!"
          }
    
           setCalcular(msg);
        }


   




    return (

        <main> 
        <section className='pagina-orçamento'>

            <h1> Calcular Orçamento familiar </h1> 

            <div>
                ganhos: <input type='number' value={ganhos} onChange={e => setganhos(Number(e.target.value))}/> 
                gastos: <input type='number' value={gastos} onChange={e => setgastos(Number(e.target.value))}/> 
               
                
                <button onClick={Orçamento}> Calcular </button>
            </div>

            <h1> {calcular} </h1>



         </section>


        </main>

    )
}