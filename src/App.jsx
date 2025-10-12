import { useState, useEffect, useRef } from 'react'
import Carrossel from './components/Carrossel'
import ContadorTempo from './components/ContadorTempo'
import VideosYoutube from './components/VideosYoutube'
import './App.css'

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  // Tenta reproduzir a música automaticamente
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.7 // Volume a 70%
          await audioRef.current.play()
          setMusicPlaying(true)
        }
      } catch (error) {
        console.log('Autoplay bloqueado. Clique no botão Play para iniciar.')
        setMusicPlaying(false)
        
        // Tenta tocar após primeira interação do usuário
        const handleFirstInteraction = async () => {
          try {
            if (audioRef.current && audioRef.current.paused) {
              await audioRef.current.play()
              setMusicPlaying(true)
              document.removeEventListener('click', handleFirstInteraction)
              document.removeEventListener('touchstart', handleFirstInteraction)
            }
          } catch (e) {
            console.log('Erro ao tentar tocar:', e)
          }
        }
        
        document.addEventListener('click', handleFirstInteraction, { once: true })
        document.addEventListener('touchstart', handleFirstInteraction, { once: true })
      }
    }

    playAudio()
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setMusicPlaying(!musicPlaying)
    }
  }

  // Dados das fotos
  const fotos = [
    '/fotos/foto1.jpg',
    '/fotos/foto2.jpg',
    '/fotos/foto3.jpg',
    '/fotos/foto4.jpg',
    '/fotos/foto5.jpg',
    '/fotos/foto6.jpg',
    '/fotos/foto7.jpg',
    '/fotos/foto8.jpg',
    '/fotos/foto9.jpg',
    '/fotos/foto10.jpg',
    '/fotos/foto11.jpg',
    '/fotos/foto12.jpg',
    '/fotos/foto13.jpg',
    '/fotos/foto14.jpg',
    '/fotos/foto15.jpg',
    '/fotos/foto16.jpg',
    '/fotos/foto17.jpg',
    '/fotos/foto18.jpg',
    '/fotos/foto19.jpg',
    '/fotos/foto20.jpg',
    '/fotos/foto21.jpg',
    '/fotos/foto22.jpg',
    '/fotos/foto23.jpg',
    '/fotos/foto24.jpg',
    '/fotos/foto25.jpg'
  ]
  
  // Mensagem única para sua namorada
  const mensagemEspecial = `Desde que você chegou, tudo ganhou mais cor e significado. Seus gestos, suas palavras e sua presença tornam meus dias mais leves e cheios de alegria.

Compartilhar momentos com você me fez descobrir que as coisas simples da vida são as mais valiosas. Te amo hoje e sempre! ❤️`

  return (
    <div className="app">
      {/* Corações flutuantes de fundo */}
      <div className="hearts-background">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>

      {/* Áudio de fundo */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/musica.mp3" type="audio/mpeg" />
      </audio>

      {/* Conteúdo principal */}
      <div className="container">
        <header className="header">
          <h1 className="title">Nosso 1º Ano Juntos</h1>
          <p className="subtitle">365 dias de amor, humor quebradinho e viagens inesquecíveis</p>
          <div className="date">25 de Outubro de 2024 - 25 de Outubro de 2025</div>
          
          {/* Botão de controle de música */}
          <button className="music-toggle" onClick={toggleMusic} title={musicPlaying ? 'Pausar música' : 'Tocar música'}>
            {musicPlaying ? '⏸️' : '▶️'}
          </button>
        </header>

        <Carrossel fotos={fotos} mensagem={mensagemEspecial} />

        <ContadorTempo dataInicio="2024-10-25T00:00:00" />

        <VideosYoutube />

        <footer className="footer">
          <p className="footer-text">
            Com você tudo é mais leve e divertido, pois eu sinto que posso ser eu mesmo! Te amo, minha preta ❤️
          </p>
          <br/>
          <p className="footer-signature">Com todo amor do mundo, seu Graminho ❤️</p>
        </footer>
      </div>
    </div>
  )
}

export default App

