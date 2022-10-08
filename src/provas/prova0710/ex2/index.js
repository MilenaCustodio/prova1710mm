import React, { useState} from 'react'
import './index.scss'




export default function Verificarsigno() {

    const [dia, setDia] = useState([]);
    const [mes, setMes] = useState('');
    const [libra, setLibra] = useState();
   

    function Signo(){

        let verificar = false
  
        if(mes == "setembro")
        {
          if (dia < 23 || dia > 30) {
            verificar = false
          }
  
          else if (dia >= 23 || dia <= 30 ) {
            verificar = true 
          }
        }
        
        else if(mes == "outubro")
        {
          if (dia < 1 || dia > 22) {
            verificar = false
          }
          else if (dia >= 1 || dia <= 22 ) {
            verificar = true 
          }
        }
        else{
            verificar = false
        }
        console.log(verificar)
        setLibra(verificar)
  
      }



    return (

        <main> 

            <div className='pagina-signo'>

                <h1>VerificarSigno</h1>

                Mês: <input type= "text" value={mes} onChange={e => setMes (e.target.value)} />
                Dia: <input type= "text" value={dia} onChange={e => setDia (e.target.value)} />

                <button onClick={Signo}>Verificar</button>

                <h1> É de libra:{libra ? 'Sim' : 'Não'} </h1>

            </div>

        </main>

    )
}
     