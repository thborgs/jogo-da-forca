import React, { useState } from 'react';

const ComoJogar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="como-jogar-container">
      <button className="como-jogar" onClick={handleTogglePopup}>
        Como Jogar
      </button>

      {isPopupOpen && (
        <div className="regras">
          <div className="regras-content">
            <h2>Regras do Jogo</h2>
            <p>
            Adivinhe a palavra secreta antes que o boneco na forca seja completado. Cada letra correta é revelada, e cada erro desenha uma parte do boneco. 
            Você tem 5 chances de errar. 
            <p>Boa sorte e divirta-se! 😃</p>
            </p>
            <button className="fechar-regras" onClick={handleTogglePopup}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComoJogar;