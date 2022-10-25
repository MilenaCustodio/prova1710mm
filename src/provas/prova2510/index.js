import React, { useState} from 'react'
import './index.scss'




export default function Media() {

    const [contador, setContador] = useState();
    const [qtdaluno, setQtdAluno] = useState([]);
    const [criaraluno, setCriarAluno] = useState([]);
     const [media, setMedia] = useState([]);

    
    

    function CriarAluno(){
        let aluno = []

        for(let i = 1; i<= qtdaluno ; i++) {
            aluno.push(i)
        }
         setAluno(aluno);

        }


    function MediaALuno(){
         let aluno = []
    
        for(let i = 1; i<= qtdaluno ; i++) {
            aluno.push(i)
         }
            setAluno(aluno);
    
        }


    return (

        <main> 
        <section className='pagina-media'>

            <h1> Media Alunos </h1> 

            <div>
                estudantes: <input type='number' value={estudantes} onChange={e => setEstudantes(Number(e.target.value))}/> 
               
                
                <button onClick={CriarAluno}> Calcular </button>
            </div>

            <h1> {contador} </h1>




         </section>


        </main>

    )
}






