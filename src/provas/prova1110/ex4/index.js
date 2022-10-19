import React, { useState} from 'react'
import './index.scss'




export default function Calcularsalario() {

    const [calcular, setCalcular] = useState([]);
    const [salario, setsalario] = useState([]);
    const [bonus, setbonus] = useState([]);
    const [desc, setDesc] = useState([]);

    function Salario(){
        let qtd = salario + (salario * (bonus/100));
        const total = qtd - desc;
        setCalcular(total);

    }




    return (

        <main> 
        <section className='pagina-salario'>

            <h1> Calcular Salário </h1> 

            <div>
                Salário: <input type='number' value={salario} onChange={e => setsalario(Number(e.target.value))}  /> 
                Bônus: <input type='number' value={bonus} onChange={e => setbonus(Number(e.target.value))}/> 
                Desconto: <input type='numer' value={desc} onChange={e => setDesc(Number(e.target.value))} /> 
                
                <button onClick={Salario}> Calcular </button>
            </div>

            <h1> Seu salário liquido é  de {calcular} </h1>



         </section>


        </main>


     

        
        
    )
}
