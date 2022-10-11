import React, { useState} from 'react'
import './index.scss'




export default function AvaliarFebre() {

    const [temperatura, setTemperatura] = useState([]);
    const [febre, setFebre] = useState([]);
   

    function Febre(){
       
        let  resul  =  ""
      
            if  ( temperatura  >=  41 )  {
              resul  =  "Hipertermia"
            }
      
            else  if  ( temperatura  >=  39.6 )  {
              resul  =  "febre alta"
            }
      
            else  if  ( temperatura  >=  37.6 )  {
              resul  =  "febre"
            }
      
            else  if  ( temperatura  >=  36 )  {
              resul  =  "Normal"
            }
      
            else  if  ( temperatura  <=  36 )  {
              resul  =  "Hipotermia"
            }
      
            setFebre ( resul );
          }

    



    return (

        <main> 
        <section className='pagina-temperatura'>

            <h1> AvaliarFebre </h1> 

            <div>
                Temperatura: <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))}  /> 
               
                
                <button onClick={Febre}> Avaliar </button>
            </div>

            <h1> A situação da sua temperatura é {febre} </h1>



         </section>


        </main>


     

        
        
    )
}