import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Homem from './components/Homem'
import LetrasErradas from './components/LetrasErradas'
import Palavra from './components/Palavra'
import Notificacao from './components/Notificacao'
import Popup from './components/Popup'
import {mostrarNotificacao as mostrar} from './helpers/helpers'

const palavras = ['aplicativo', 'programa', 'interface', 'internet'];

function App() {
  // Definindo a palavra selecionada dentro do estado
  const [palavraSelecionada, setPalavraSelecionada] = useState(palavras[Math.floor(Math.random() * palavras.length)]);
  
  // Estados para letras corretas e erradas
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  
  const [jogavel, setJogavel] = useState(true);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);

// Função para lidar com a entrada de letras (tanto do teclado físico quanto do virtual)
    const handleLetra = (letra) => {
      if (!jogavel) return;


      


    // Checar pra ver se a palavra tem a letra, se não tiver a letra correspondente, então adiciona no banco de letras, se a letra já tiver sido inserida então mostra o aviso que a letra já foi inserida:
          if (palavraSelecionada.includes(letra)) {
            if (!letrasCorretas.includes(letra)) {
              setLetrasCorretas(currentLetters => [...currentLetters, letra])
    
              
            } else {
             mostrar(setMostrarNotificacao);
            }
          } else {
            if (!letrasErradas.includes(letra)) {
              setLetrasErradas(letrasErradas => [...letrasErradas, letra])
    
             
            } else {
              mostrar(setMostrarNotificacao);
            }
          }
      };

    useEffect(() => {
      const handleKeydown = event => {
        const { key, keyCode } = event;
        if (jogavel && keyCode >= 65 && keyCode <= 90) {
          const letra = key.toLowerCase();
          handleLetra(letra); // Reutilizando a função handleLetra para o teclado físico
        }
      };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  
    

  }, [letrasCorretas, letrasErradas, jogavel]);

 
  // Função para jogar novamente:
  function jogarNovamente() {
    setJogavel(true);

    // Apagar Arrays
    setLetrasCorretas([]);
    setLetrasErradas([]);

    const random = Math.floor(Math.random() * palavras.length);
    setPalavraSelecionada(palavras[random]);
  }
  

  return (
    <>
      <Header />
      <div className="game-container">
        <Homem letrasErradas={letrasErradas} />
        <LetrasErradas letrasErradas={letrasErradas} />
        {/* Passando a palavra e as letras corretas como props */}
        <Palavra palavraSelecionada={palavraSelecionada} letrasCorretas={letrasCorretas} />
        </div>

        <div className="teclado">
        {Array.from("abcdefghijklçmnopqrstuvwxyz").map((letra) => (
          <button 
            key={letra} 
            onClick={() => handleLetra(letra)} // Usando a mesma função para o teclado virtual
            disabled={letrasCorretas.includes(letra) || letrasErradas.includes(letra)}
          >
            {letra.toUpperCase()}
    </button>
  ))}
</div>


        <Popup 
        letrasCorretas={letrasCorretas} 
        letrasErradas={letrasErradas} 
        palavraSelecionada={palavraSelecionada} 
        setJogavel={setJogavel}
        jogarNovamente={jogarNovamente}/>
        <Notificacao mostrarNotificacao={mostrarNotificacao}/>
    </>
  );
}

export default App
