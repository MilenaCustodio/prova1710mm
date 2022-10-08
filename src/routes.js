import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Exercicio1 from './provas/prova0710/ex1/index.js'
import Exercicio2 from './provas/prova0710/ex2/index.js'
import Exercicio3 from './provas/prova0710/ex3/index.js'



export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/ex1' element={< Exercicio1/>} />
                <Route path = '/ex2' element={< Exercicio2/>} />
                <Route path = '/ex3' element={< Exercicio3/>} />
            </Routes>
        </BrowserRouter>
    );
}
