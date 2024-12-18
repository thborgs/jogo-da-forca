import React from 'react'

const LetrasErradas = ({letrasErradas}) => {

  if (letrasErradas.length === 0) {
    return null; // Não renderiza anda se não houver letras erradas. Estava tendo um problema do background color estar sendo renderizado
  }

  return (
    <div className="letras-erradas-container">
        <div>
        {letrasErradas.length > 0 && <p>Letras Erradas:</p>}
        {letrasErradas
        .map((letra, i) => <span key={i}>{letra}</span>)
        .reduce((prev, curr) => prev == null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </div>
  )
}

export default LetrasErradas