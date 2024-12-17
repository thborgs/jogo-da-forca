import React from 'react'

const Notificacao = ( { mostrarNotificacao }) => {
  return (
    <div className={`notification-container ${mostrarNotificacao ? 'mostrar' : ''}`}>
    <p>Você já escolheu essa letra!</p>
  </div>
  )
}

export default Notificacao