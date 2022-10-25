import React, { useState} from 'react'
import './index.scss'
import { Link } from 'react-router-dom'



export default function Index () {


    return (

        <main className='pagina-provas'> 
            <div>
                <h1> Prova 07/10</h1>
                <Link to='/ex1'> Exercicio 1 </Link>
                <Link to='/ex2'> Exercicio 2 </Link>
                <Link to='/ex3'> Exercicio 3 </Link>
            </div>

            <hr/>
            
            <div>
                <h1> Prova 11/10</h1>
                <Link to='/ex4'> Exercicio 4 </Link>
                <Link to='/ex5'> Exercicio 5 </Link>
                <Link to='/ex6'> Exercicio 6 </Link>
            </div>

            <hr/>

            <div>
                <h1> Prova 14/10</h1>
                <Link to='/ex7'> Exercicio 7 </Link>
                <Link to='/ex8'> Exercicio 8 </Link>
            </div>

            <hr/>

            <div>
                <h1> Prova 18/10</h1>
                <Link to='/ex9'> Exercicio 9 </Link>
                <Link to='/ex10'> Exercicio 10 </Link>
                <Link to='/ex11'> Exercicio 11 </Link>
            </div>

            <hr/>

            <div>
                <h1> Prova 19/10</h1>
                <Link to='/ex12'> Exercicio 12 </Link>
            </div>

            <hr/>
            <div>
                <h1> Prova 25/10</h1>
                <Link to='/ex12'> Exercicio 13 </Link>
            </div>
            
            
                
               
        </main>
       

    

    );
}






