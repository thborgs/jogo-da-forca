import React, { useEffect } from 'react'
import { checarVitoria } from '../helpers/helpers';

const Popup = ({ letrasCorretas, letrasErradas, palavraSelecionada, setJogavel, jogarNovamente }) => {

 let mensagemFinal = '';
 let mensagemFinalMostrarPalavra = '';
 let jogavel = true;

 if (checarVitoria(letrasCorretas, letrasErradas, palavraSelecionada) == 'vitoria') {
  mensagemFinal = 'Você venceu! 🏆';
  jogavel = false;
 } else if ( checarVitoria (letrasCorretas, letrasErradas, palavraSelecionada) == 'derrota') {
  mensagemFinal = 'Você perdeu!';
  mensagemFinalMostrarPalavra = `... a palavra era: ${palavraSelecionada}`;
  jogavel = false;
 }

 useEffect (() => setJogavel(jogavel));

  return (
    <div className="popup-container" style={mensagemFinal != '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{mensagemFinal}</h2>
        <h3>{mensagemFinalMostrarPalavra}</h3>
        <button className="jogar-novamente" onClick={jogarNovamente}>Jogar Novamente</button>
      </div>
    </div>
  )
}

export default Popup