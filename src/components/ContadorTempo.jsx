import { useState, useEffect } from 'react'
import './ContadorTempo.css'

function ContadorTempo({ dataInicio }) {
  const [tempoJuntos, setTempoJuntos] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
    totalDias: 0,
    totalHoras: 0,
    totalMinutos: 0,
    totalSegundos: 0,
    luasCheia: 0,
    finaisDeSemana: 0
  })
  
  const [estatisticaAtual, setEstatisticaAtual] = useState(0)

  useEffect(() => {
    const calcularTempo = () => {
      const inicio = new Date(dataInicio)
      const agora = new Date()
      
      // Diferença em milissegundos
      const diff = agora - inicio
      
      // Cálculos de tempo
      const totalSegundos = Math.floor(diff / 1000)
      const totalMinutos = Math.floor(diff / (1000 * 60))
      const totalHoras = Math.floor(diff / (1000 * 60 * 60))
      const totalDias = Math.floor(diff / (1000 * 60 * 60 * 24))
      
      // Calcular anos, meses, dias, horas, minutos, segundos
      let anos = agora.getFullYear() - inicio.getFullYear()
      let meses = agora.getMonth() - inicio.getMonth()
      let dias = agora.getDate() - inicio.getDate()
      let horas = agora.getHours() - inicio.getHours()
      let minutos = agora.getMinutes() - inicio.getMinutes()
      let segundos = agora.getSeconds() - inicio.getSeconds()
      
      // Ajustes para valores negativos
      if (segundos < 0) {
        segundos += 60
        minutos--
      }
      if (minutos < 0) {
        minutos += 60
        horas--
      }
      if (horas < 0) {
        horas += 24
        dias--
      }
      if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate()
        dias += ultimoDiaMesAnterior
        meses--
      }
      if (meses < 0) {
        meses += 12
        anos--
      }
      
      // Luas cheias (uma a cada 29.5 dias)
      const luasCheia = Math.floor(totalDias / 29.5)
      
      // Finais de semana (aproximado)
      const finaisDeSemana = Math.floor(totalDias / 7) * 2
      
      setTempoJuntos({
        anos,
        meses,
        dias,
        horas,
        minutos,
        segundos,
        totalDias,
        totalHoras,
        totalMinutos,
        totalSegundos,
        luasCheia,
        finaisDeSemana
      })
    }
    
    // Calcular imediatamente
    calcularTempo()
    
    // Atualizar a cada segundo
    const intervalo = setInterval(calcularTempo, 1000)
    
    return () => clearInterval(intervalo)
  }, [dataInicio])
  
  // Rotacionar estatísticas a cada 3 segundos
  useEffect(() => {
    const intervaloEstatisticas = setInterval(() => {
      setEstatisticaAtual((prev) => (prev + 1) % estatisticas.length)
    }, 3000)
    
    return () => clearInterval(intervaloEstatisticas)
  }, [])
  
  const formatarNumero = (num) => {
    return num.toLocaleString('pt-BR')
  }
  
  const formatarPorExtenso = (num) => {
    const unidades = ['', 'Mil', 'Milhão', 'Milhões', 'Bilhão']
    if (num < 1000) return num.toString()
    
    let ordem = 0
    let valor = num
    
    while (valor >= 1000 && ordem < unidades.length - 1) {
      valor = valor / 1000
      ordem++
    }
    
    const valorFormatado = Math.floor(valor).toLocaleString('pt-BR')
    return `${valorFormatado} ${unidades[ordem]}`
  }
  
  // Calcular quantos eventos especiais já passaram
  const calcularEventos = () => {
    const inicio = new Date(dataInicio)
    const agora = new Date()
    
    // Dia dos Namorados (12 de Junho)
    let namorados = 0
    for (let ano = inicio.getFullYear(); ano <= agora.getFullYear(); ano++) {
      const diaNamorados = new Date(ano, 5, 12) // Mês 5 = Junho (0-indexed)
      if (diaNamorados >= inicio && diaNamorados <= agora) {
        namorados++
      }
    }
    
    // Natal (25 de Dezembro)
    let natais = 0
    for (let ano = inicio.getFullYear(); ano <= agora.getFullYear(); ano++) {
      const natal = new Date(ano, 11, 25) // Mês 11 = Dezembro
      if (natal >= inicio && natal <= agora) {
        natais++
      }
    }
    
    // Ano Novo (1 de Janeiro)
    let anosNovos = 0
    for (let ano = inicio.getFullYear() + 1; ano <= agora.getFullYear(); ano++) {
      const anoNovo = new Date(ano, 0, 1) // Mês 0 = Janeiro
      if (anoNovo >= inicio && anoNovo <= agora) {
        anosNovos++
      }
    }
    
    return { namorados, natais, anosNovos }
  }
  
  const eventos = calcularEventos()
  
  // Lista de estatísticas para rotacionar
  const estatisticas = [
    {
      icone: '💑',
      titulo: eventos.namorados === 1 ? 'Um Dia dos Namorados' : `${eventos.namorados} Dias dos Namorados`,
      descricao: '12 de Junho'
    },
    {
      icone: '🎄',
      titulo: eventos.natais === 1 ? 'Um Natal' : `${eventos.natais} Natais`,
      descricao: '25 de Dezembro'
    },
    {
      icone: '🎆',
      titulo: eventos.anosNovos === 1 ? 'Um Ano Novo' : `${eventos.anosNovos} Anos Novos`,
      descricao: '1º de Janeiro'
    },
    {
      icone: '📅',
      titulo: `${tempoJuntos.finaisDeSemana} Finais de Semana`,
      descricao: 'Sábados e Domingos'
    },
    {
      icone: '🌕',
      titulo: `${tempoJuntos.luasCheia} Luas Cheias`,
      descricao: 'Uma a cada 29.5 dias'
    },
    {
      icone: '⏰',
      titulo: `${formatarPorExtenso(tempoJuntos.totalHoras)} Horas`,
      descricao: 'Total de horas juntos'
    },
    {
      icone: '⏱️',
      titulo: `${formatarPorExtenso(tempoJuntos.totalMinutos)} Minutos`,
      descricao: 'Total de minutos juntos'
    },
    {
      icone: '💫',
      titulo: `${formatarPorExtenso(tempoJuntos.totalSegundos)} Segundos`,
      descricao: 'E contando...'
    }
  ]

  return (
    <div className="contador-tempo-container">
      <h2 className="contador-titulo">Tempo Juntos</h2>
      
      {/* Contador principal */}
      <div className="contador-principal">
        <div className="contador-item">
          <div className="contador-icone">🗓️</div>
          <div className="contador-numero">{tempoJuntos.anos}</div>
          <div className="contador-label">{tempoJuntos.anos === 1 ? 'Ano' : 'Anos'}</div>
        </div>
        
        <div className="contador-item">
          <div className="contador-icone">📅</div>
          <div className="contador-numero">{tempoJuntos.meses}</div>
          <div className="contador-label">{tempoJuntos.meses === 1 ? 'Mês' : 'Meses'}</div>
        </div>
        
        <div className="contador-item">
          <div className="contador-icone">☀️</div>
          <div className="contador-numero">{tempoJuntos.dias}</div>
          <div className="contador-label">{tempoJuntos.dias === 1 ? 'Dia' : 'Dias'}</div>
        </div>
        
        <div className="contador-item">
          <div className="contador-icone">⏰</div>
          <div className="contador-numero">{tempoJuntos.horas}</div>
          <div className="contador-label">{tempoJuntos.horas === 1 ? 'Hora' : 'Horas'}</div>
        </div>
        
        <div className="contador-item">
          <div className="contador-icone">⏱️</div>
          <div className="contador-numero">{tempoJuntos.minutos}</div>
          <div className="contador-label">{tempoJuntos.minutos === 1 ? 'Minuto' : 'Minutos'}</div>
        </div>
        
        <div className="contador-item">
          <div className="contador-icone">⚡</div>
          <div className="contador-numero">{tempoJuntos.segundos}</div>
          <div className="contador-label">{tempoJuntos.segundos === 1 ? 'Segundo' : 'Segundos'}</div>
        </div>
      </div>
      
      {/* Carrossel de Estatísticas */}
      <div className="estatisticas-carousel">
        <div className="estatistica-dinamica">
          <div className="estatistica-icone-grande">
            {estatisticas[estatisticaAtual].icone}
          </div>
          <div className="estatistica-info">
            <div className="estatistica-titulo-dinamico">
              {estatisticas[estatisticaAtual].titulo}
            </div>
            <div className="estatistica-desc-dinamica">
              {estatisticas[estatisticaAtual].descricao}
            </div>
          </div>
        </div>
        
        {/* Indicadores */}
        <div className="carousel-indicadores">
          {estatisticas.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicador ${index === estatisticaAtual ? 'ativo' : ''}`}
              onClick={() => setEstatisticaAtual(index)}
              aria-label={`Ir para estatística ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContadorTempo

