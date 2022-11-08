
import { calcMaior, calcMedia, calcMenor, criarArray } from '../services';

function App() {
  const [qtd, setQtd] = useState(0);
  const [notasAlunos, setNotasAlunos] = useState([])

  const [media, setMedia] = useState(0);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);


  function okQtd() {
    const x = criarArray(qtd);
    setNotasAlunos(x);
  }

  function alterar(pos, novoValor) {
    notasAlunos[pos] = Number(novoValor);
    setNotasAlunos([...notasAlunos]);
  }

  function calcular() {
    const a = calcMedia(notasAlunos);
    const b = calcMaior(notasAlunos);
    const c = calcMenor(notasAlunos);

    set(a);
    setMaior(b);
    setMenor(c);
  }

  
}

export default App;
 