import {BrowserRouter, Routes, Route } from 'react-router-dom';

//prova1
import Exercicio1 from './provas/prova0710/ex1/index.js'
import Exercicio2 from './provas/prova0710/ex2/index.js'
import Exercicio3 from './provas/prova0710/ex3/index.js'

//prova2
import Exercicio4 from './provas/prova1110/ex4/index.js'
import Exercicio5 from './provas/prova1110/ex5/index.js'
import Exercicio6 from './provas/prova1110/ex6/index.js'

//prova3
import Exercicio7 from './provas/prova1410/ex7/index.js'
import Exercicio8 from './provas/prova1410/ex8/index.js'

//prova4
import Exercicio9 from './provas/prova1810/ex9/index.js'
import Exercicio10 from './provas/prova1810/ex10/index.js'
import Exercicio11 from './provas/prova1810/ex11/index.js'

//prova5
import Exercicio12 from './provas/prova1910/index.js'

//inicio
import Inicio from './provas/index.js'



export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={< Inicio/>} />
                <Route path = '/ex1' element={< Exercicio1/>} />
                <Route path = '/ex2' element={< Exercicio2/>} />
                <Route path = '/ex3' element={< Exercicio3/>} />
                <Route path = '/ex4' element={< Exercicio4/>} />
                <Route path = '/ex5' element={< Exercicio5/>} />
                <Route path = '/ex6' element={< Exercicio6/>} />
                <Route path = '/ex7' element={< Exercicio7/>} />
                <Route path = '/ex8' element={< Exercicio8/>} />
                <Route path = '/ex9' element={< Exercicio9/>} />
                <Route path = '/ex10' element={< Exercicio10/>} />
                <Route path = '/ex11' element={< Exercicio11/>} />
                <Route path = '/ex12' element={< Exercicio12/>} />
            </Routes>
        </BrowserRouter>
    );
}
