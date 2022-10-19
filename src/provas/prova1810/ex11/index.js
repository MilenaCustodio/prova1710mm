import React, { useState} from 'react'
import './index.scss'




export default function DesenharRetangulo() {

    const [contador, setContador] = useState();
    const [base, setBase] = useState([]);
    const [altura, setAltura] = useState([]);


    
    

    function Desenhar(){

    let linha = [];
    
        for(let i = 0; i <= linha; i++)
        {
            for(let b = 0; b < i; b++)
            {
                linha.push("*");
            }
        }
        setContador(linha);
    }
    



    return (

        <main> 
        <section className='pagina-retangulo'>

            <h1> Desenhar Retangulo </h1> 

            <div>
                Base: <input type='number' value={base} onChange={e => setBase(Number(e.target.value))}/> 
                Altura: <input type='number' value={altura} onChange={e => setAltura(Number(e.target.value))}/> 
                
                
                <button onClick={Desenhar}> Calcular </button>
            </div>

            <h1> {contador} </h1>




         </section>


        </main>

    )
}






