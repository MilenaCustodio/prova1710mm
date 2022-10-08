import React, { useState} from 'react'
import './index.scss'




export default function Sorvete() {

    const [gramas, setGramas] = useState ();
    const [valor, setValor] = useState (0);
   

    function Sorveteria(){
        let total = 0
  
        if (gramas >= 1000) {
          total = gramas * 0.03
        }
        else{
          total = gramas * 0.035
        }
        setValor(total.toFixed(2))
  
      }



    return (

        <main> 

        <div>
            <h1> Função Sorvete </h1>
            <h2> Desconto a partir de 1kg </h2>

            <h3> Quantas gramas você deseja? </h3>
            <input  type ="number" value = { gramas }  onChange = { e => setGramas  (Number (e . target . value ))}/>

            <button onClick = {Sorveteria}> Valor </button>

            <h1> total a pagar é: R$ {valor} </h1>

        </div>

        </main>

    )
}
     