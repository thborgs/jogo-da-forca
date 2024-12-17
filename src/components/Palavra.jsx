import React from 'react';

const Palavra = ({ palavraSelecionada, letrasCorretas }) => {
  return (
    <div className="palavra">
      {palavraSelecionada.split('').map((letra, i) => (
        <span className="letra" key={i}>
          {letrasCorretas.includes(letra) ? letra : ''}
        </span>
      ))}
    </div>
  );
};

export default Palavra;


