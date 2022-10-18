import React, { useState} from 'react'
import './index.scss'




export default function NumerosNaturais() {

    const [contador, setContador] = useState();
    const [inicio, setInicio] = useState([]);
    const [final, setFinal] = useState([]);
    
    

    function Contar(){

    let contador = []

        for(let i = inicio; i<= final; i++) {
            contador.push(i)
        }
        setContador(contador);
    }
    



    return (

        <main> 
        <section className='pagina-contador'>

            <h1> Contar números naturais </h1> 

            <div>
                Inicio: <input type='number' value={inicio} onChange={e => setInicio(Number(e.target.value))}/> 
                Final: <input type='number' value={final} onChange={e => setFinal(Number(e.target.value))}/> 
               
                
                <button onClick={Contar}> Calcular </button>
            </div>

            <h1> {contador} </h1>



         </section>


        </main>

    )
}






