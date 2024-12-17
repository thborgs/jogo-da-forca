import React from 'react'

const LetrasErradas = ({letrasErradas}) => {
  return (
    <div className="letras-erradas-container">
        <div>
        {letrasErradas.length > 0 && <p>Letras Erradas:</p>}
        {letrasErradas
        .map((letra, i) => <span key={i}>{letra}</span>)
        .reduce((prev, curr) => prev == null ? [curr] : [prev, ',', curr], null)}
        </div>
      </div>
  )
}

export default LetrasErradas