import React, { useState} from 'react'
import './index.scss'




export default function Calcularacai() {

    const [calcular, setCalcular] = useState([]);
    const [qtdPeq, setqtdPeq] = useState([]);
    const [qtdMed, setqtdMed] = useState([]);
    const [qtdGra, setqtdGra] = useState([]);
    const [desc, setDesc] = useState([]);

    function Açaí(){
        let qtd = qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.5;
        const total = qtd - (qtd * (desc/100));
        setCalcular(total);

    }




    return (

        <main> 
        <section className='pagina-acai'>

            <h1> Calcular Açaí </h1> 

            <div>
                Qtd Pequena: <input type='number' value={qtdPeq} onChange={e => setqtdPeq(Number(e.target.value))}  /> 
                Qtd Médio: <input type='number' value={qtdMed} onChange={e => setqtdMed(Number(e.target.value))}/> 
                Qtd Grande: <input type='number' value={qtdGra} onChange={e => setqtdGra(Number(e.target.value))} /> 
                Desconto: <input type='numer' value={desc} onChange={e => setDesc(Number(e.target.value))} /> 
                
                <button onClick={Açaí}> Calcular </button>
            </div>

            <h1> Total á pagar é {calcular} </h1>



         </section>


        </main>


     

        
        
    )
}
