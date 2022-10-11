import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Exercicio1 from './provas/prova0710/ex1/index.js'
import Exercicio2 from './provas/prova0710/ex2/index.js'
import Exercicio3 from './provas/prova0710/ex3/index.js'
import Exercicio4 from './provas/prova1110/ex4/index.js'
import Exercicio5 from './provas/prova1110/ex5/index.js'
import Exercicio6 from './provas/prova1110/ex6/index.js'



export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/ex1' element={< Exercicio1/>} />
                <Route path = '/ex2' element={< Exercicio2/>} />
                <Route path = '/ex3' element={< Exercicio3/>} />
                <Route path = '/ex4' element={< Exercicio4/>} />
                <Route path = '/ex5' element={< Exercicio5/>} />
                <Route path = '/ex6' element={< Exercicio6/>} />
            </Routes>
        </BrowserRouter>
    );
}
