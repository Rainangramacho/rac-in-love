import { useState } from 'react'
import './VideosYoutube.css'

function VideosYoutube() {
  const [videoAtual, setVideoAtual] = useState(0)

  const videos = [
    {
      id: 'BluOtCeD9LM',
      titulo: 'Vídeo 1 - Nosso Momento Especial'
    },
    {
      id: 'GSQLVTuqDxk',
      titulo: 'Vídeo 2 - Memórias Juntos'
    },
    {
      id: 'S2JA2BIlt94',
      titulo: 'Vídeo 3 - Nossa História'
    }
  ]

  const proximoVideo = () => {
    setVideoAtual((prev) => (prev + 1) % videos.length)
  }

  const videoAnterior = () => {
    setVideoAtual((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  return (
    <div className="videos-container">
      <h2 className="videos-titulo">Nossos Músicas</h2>
      
      <div className="video-player-wrapper">
        {/* Botão Anterior */}
        <button 
          className="video-nav-btn btn-anterior" 
          onClick={videoAnterior}
          aria-label="Vídeo anterior"
        >
          ❮
        </button>

        {/* Player do YouTube */}
        <div className="video-player">
          <div className="iframe-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videos[videoAtual].id}?rel=0&modestbranding=1`}
              title={videos[videoAtual].titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <p className="video-titulo-atual">{videos[videoAtual].titulo}</p>
            <p className="video-contador">{videoAtual + 1} de {videos.length}</p>
          </div>
        </div>

        {/* Botão Próximo */}
        <button 
          className="video-nav-btn btn-proximo" 
          onClick={proximoVideo}
          aria-label="Próximo vídeo"
        >
          ❯
        </button>
      </div>

      {/* Indicadores */}
      <div className="video-indicadores">
        {videos.map((video, index) => (
          <button
            key={index}
            className={`video-indicador ${index === videoAtual ? 'ativo' : ''}`}
            onClick={() => setVideoAtual(index)}
            aria-label={`Ir para vídeo ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnails dos outros vídeos */}
      <div className="videos-lista">
        {videos.map((video, index) => (
          <button
            key={index}
            className={`video-thumb ${index === videoAtual ? 'ativo' : ''}`}
            onClick={() => setVideoAtual(index)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.titulo}
              className="thumb-image"
            />
            <div className="thumb-overlay">
              {index === videoAtual && (
                <span className="thumb-playing">▶ Reproduzindo</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default VideosYoutube

