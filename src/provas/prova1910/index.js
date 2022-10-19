import React, { useState} from 'react'
import './index.scss'




export default function EuqueroCafe() {

    const [contador, setContador] = useState();
    const [estudantes, setEstudantes] = useState([]);
    const [litros, setLitros] = useState([]);
    const [mililitros, setMililitros] = useState([]);

    
    

    function Cafe(){

    let n = []
    let l = []
    let d = []

    for(1<=n;l ; d>= 10){

    }
        setContador (n,l,d);
    }
    



    return (

        <main> 
        <section className='pagina-cafe'>

            <h1> Cafe </h1> 

            <div>
                estudantes: <input type='number' value={estudantes} onChange={e => setEstudantes(Number(e.target.value))}/> 
                litros: <input type='number' value={litros} onChange={e => setLitros(Number(e.target.value))}/> 
                mililitros: <input type='number' value={mililitros} onChange={e => setMililitros(Number(e.target.value))}/> 
          
                
                <button onClick={Cafe}> Calcular </button>
            </div>

            <h1> {contador} </h1>




         </section>


        </main>

    )
}






