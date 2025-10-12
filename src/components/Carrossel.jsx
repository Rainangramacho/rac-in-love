import { useState, useRef } from 'react'
import './Carrossel.css'

function Carrossel({ fotos, mensagem }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const trackRef = useRef(null)

  const irParaFoto = (index) => {
    setCurrentIndex(index)
    setPrevTranslate(-index * 100)
    setCurrentTranslate(-index * 100)
  }

  const proximaFoto = () => {
    const newIndex = (currentIndex + 1) % fotos.length
    setCurrentIndex(newIndex)
    setPrevTranslate(-newIndex * 100)
    setCurrentTranslate(-newIndex * 100)
  }

  const fotoAnterior = () => {
    const newIndex = currentIndex === 0 ? fotos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setPrevTranslate(-newIndex * 100)
    setCurrentTranslate(-newIndex * 100)
  }

  // Funções de drag/swipe
  const handleDragStart = (clientX) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragMove = (clientX) => {
    if (!isDragging) return
    
    const currentPosition = clientX
    const diff = currentPosition - startX
    const width = trackRef.current?.offsetWidth || window.innerWidth
    const movePercent = (diff / width) * 100
    
    setCurrentTranslate(prevTranslate + movePercent)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    const movedBy = currentTranslate - prevTranslate
    
    // Se moveu mais de 20%, muda de foto
    if (movedBy < -20 && currentIndex < fotos.length - 1) {
      proximaFoto()
    } else if (movedBy > 20 && currentIndex > 0) {
      fotoAnterior()
    } else {
      // Volta para a posição original
      setCurrentTranslate(prevTranslate)
    }
  }

  // Eventos de mouse
  const onMouseDown = (e) => {
    handleDragStart(e.clientX)
  }

  const onMouseMove = (e) => {
    handleDragMove(e.clientX)
  }

  const onMouseUp = () => {
    handleDragEnd()
  }

  const onMouseLeave = () => {
    if (isDragging) handleDragEnd()
  }

  // Eventos de touch
  const onTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX)
  }

  const onTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    handleDragEnd()
  }

  // Função para calcular quais indicadores mostrar
  const getIndicadoresVisiveis = () => {
    const maxIndicadores = 7 // Máximo de indicadores a mostrar
    const totalFotos = fotos.length
    
    if (totalFotos <= maxIndicadores) {
      // Se tiver poucas fotos, mostra todos
      return Array.from({ length: totalFotos }, (_, i) => i)
    }
    
    // Mostra indicadores ao redor da foto atual
    const meio = Math.floor(maxIndicadores / 2)
    let inicio = currentIndex - meio
    let fim = currentIndex + meio
    
    // Ajusta se estiver no início
    if (inicio < 0) {
      inicio = 0
      fim = maxIndicadores - 1
    }
    
    // Ajusta se estiver no final
    if (fim >= totalFotos) {
      fim = totalFotos - 1
      inicio = totalFotos - maxIndicadores
    }
    
    return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i)
  }

  return (
    <div className="carrossel-container">
      {/* Galeria de fotos - estilo Tempo Juntos */}
      <div className="galeria-wrapper">
        <button className="nav-btn nav-prev" onClick={fotoAnterior} aria-label="Foto anterior">
          ❮
        </button>
        
        <div 
          className="galeria-scroll"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            ref={trackRef}
            className={`galeria-track ${isDragging ? 'dragging' : ''}`}
            style={{
              transform: `translateX(${currentTranslate}%)`
            }}
          >
            {fotos.map((foto, index) => (
              <div key={index} className="galeria-item">
                <img 
                  src={foto} 
                  alt={`Foto ${index + 1}`}
                  className="galeria-foto"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
        
        <button className="nav-btn nav-next" onClick={proximaFoto} aria-label="Próxima foto">
          ❯
        </button>
      </div>

      {/* Indicadores simplificados */}
      <div className="galeria-indicadores">
        {getIndicadoresVisiveis().map((index) => (
          <button
            key={index}
            className={`galeria-indicador ${index === currentIndex ? 'ativo' : ''}`}
            onClick={() => irParaFoto(index)}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de fotos */}
      <div className="contador-fotos">
        {currentIndex + 1} / {fotos.length}
      </div>

      {/* Mensagem única e especial */}
      <div className="mensagem-especial">
        <p className="mensagem-texto">{mensagem}</p>
      </div>
    </div>
  )
}

export default Carrossel
