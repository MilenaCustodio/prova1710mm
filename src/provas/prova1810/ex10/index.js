import React, { useState} from 'react'
import './index.scss'




export default function DesenharLinha() {

    const [contador, setContador] = useState();
    const [tamanho, setTamanho] = useState([]);

    
    

    function Desenhar(){

    let linha = []
    

        for( let i = 0; i<=tamanho; i++)
        {
            linha.push("*");
        }
        setContador(linha);
    }
    



    return (

        <main> 
        <section className='pagina-linhas'>

            <h1> Desenhar Linha </h1> 

            <div>
                Tamanho: <input type='number' value={tamanho} onChange={e => setTamanho(Number(e.target.value))}/> 
                
                
                <button onClick={Desenhar}> Calcular </button>
            </div>

            <h1> {contador} </h1>




         </section>


        </main>

    )
}






