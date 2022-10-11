import React, { useState} from 'react'
import './index.scss'




export default function Calculartanque() {

    const [tanque, setTanque] = useState([]);
    const [dist, setDist] = useState([]);
    const [consumo, setConsumo] = useState([]);
    const [viagem, setViagem] = useState([]);

    function Tanque(){
        let km = consumo / dist;
        const total = km / tanque;
        setViagem(Math.ceil (total) );

    }




    return (

        <main> 
        <section className='pagina-tanque'>

            <h1> Calcular Viagem </h1> 

            <div>
                Tanque: <input type='number' value={tanque} onChange={e => setTanque(Number(e.target.value))}  /> 
                Distância: <input type='number' value={dist} onChange={e => setDist(Number(e.target.value))}/> 
                Consumo: <input type='numer' value={consumo} onChange={e => setConsumo(Number(e.target.value))} /> 
                
                <button onClick={Tanque}> Calcular </button>
            </div>

            <h1> Você precisará fazer {viagem} paradas para abastecer </h1>



         </section>


        </main>


     

        
        
    )
}