# ❤️ Site de Aniversário de Namoro

Um site romântico e especial para comemorar 1 ano de namoro, criado com React e muito amor!

## 🌟 Características

- **Design Romântico**: Cores elegantes em tons de vermelho com corações flutuantes
- **Contador em Tempo Real**: Mostra exatamente quanto tempo já passaram juntos (anos, meses, dias, horas, minutos, segundos)
- **Estatísticas de Amor**: Carrossel automático com eventos especiais (Natal, Ano Novo, Dia dos Namorados) e estatísticas
- **Carrossel de Fotos**: Galeria horizontal com transição suave, estilo Tempo Juntos
  - Arraste as fotos para navegar (drag & swipe)
  - Clique nas setas laterais
  - Clique nos indicadores
- **Mensagem Especial**: Uma mensagem romântica única exibida abaixo das fotos
- **Vídeos do YouTube**: Seção integrada com vídeos especiais do casal
- **Música de Fundo**: Toca automaticamente quando o site é aberto
- **Totalmente Responsivo**: Funciona perfeitamente em celular, tablet e desktop
- **Animações Suaves**: Transições elegantes entre fotos, contador e vídeos

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Adicionar suas fotos

Crie uma pasta `public/fotos/` e adicione suas fotos com os seguintes nomes:
- `foto1.jpg`
- `foto2.jpg`
- `foto3.jpg`
- `foto4.jpg`
- `foto5.jpg`

**Dica**: Você pode adicionar quantas fotos quiser! Basta editar o array `momentos` no arquivo `src/App.jsx`.

### 3. Adicionar música

Coloque seu arquivo de música como `musica.mp3` na pasta `public/`.

**Nota**: Alguns navegadores bloqueiam autoplay de áudio. Se isso acontecer, a pessoa pode clicar no botão de música no canto superior direito.

### 4. Personalizar a mensagem especial

Abra o arquivo `src/App.jsx` e encontre a variável `mensagemEspecial`. Edite com sua declaração de amor:

```javascript
const mensagemEspecial = `Coloque aqui sua mensagem especial e romântica para sua namorada.

Pode ter múltiplas linhas e será exibida abaixo de todas as fotos. ❤️`
```

**Dica**: Esta mensagem aparece uma vez só, abaixo do carrossel de fotos, não muda a cada foto.

### 5. Personalizar datas e títulos

No arquivo `src/App.jsx`, você pode editar:
- O título principal
- As datas do relacionamento (atualmente: 25 de Outubro de 2024)
- A data de início do contador (linha 95): `dataInicio="2024-10-25T00:00:00"`
  - **IMPORTANTE**: Altere esta data para o dia em que vocês começaram a namorar!
  - Formato: `AAAA-MM-DDTHH:MM:SS` (ex: `2024-10-25T00:00:00`)
- A citação no rodapé

### 6. Personalizar vídeos do YouTube (opcional)

Se quiser adicionar vídeos especiais do casal, edite o arquivo `src/components/VideosYoutube.jsx` e altere os IDs dos vídeos:

```javascript
const videos = [
  {
    id: 'BluOtCeD9LM',  // Altere para o ID do seu vídeo
    titulo: 'Nosso Momento Especial'
  },
  // ... adicione mais vídeos
]
```

**Como pegar o ID do vídeo do YouTube:**
- URL do vídeo: `https://www.youtube.com/watch?v=BluOtCeD9LM`
- O ID é: `BluOtCeD9LM` (parte depois do `v=`)

### 7. Executar o projeto

Para desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

Para fazer build de produção:
```bash
npm run build
```

Os arquivos prontos para deploy estarão na pasta `dist/`.

## 📱 Como compartilhar

### Opção 1: Localmente
Execute `npm run dev` e compartilhe o link local com sua namorada (mesmo WiFi).

### Opção 2: Deploy online (Recomendado)

#### Netlify (Grátis e Fácil)
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Execute `npm run build`
3. Arraste a pasta `dist` para o Netlify
4. Pronto! Você terá um link único para compartilhar

#### Vercel (Grátis e Fácil)
1. Instale o Vercel CLI: `npm install -g vercel`
2. Execute `vercel` na pasta do projeto
3. Siga as instruções
4. Receba seu link!

## 🎨 Personalização Avançada

### Mudar cores
Edite o arquivo `src/App.css` e procure por:
```css
background: linear-gradient(135deg, #fff5f5 0%, #ffe4e4 25%, #ffcccc 50%, #ffb3b3 75%, #ff9999 100%);
```

**Paleta de cores atual**: Tons de vermelho elegante e sofisticado (#8B0000, #A52A2A, #C41E3A, #DC143C)

### Mudar fontes
As fontes usadas são:
- **Great Vibes**: Fonte cursiva romântica
- **Poppins**: Fonte moderna e limpa

Para usar outras fontes, edite o `index.html`.

### Adicionar mais fotos
No arquivo `src/App.jsx`, adicione mais objetos ao array `momentos`:
```javascript
{
  id: 6,
  imagem: '/fotos/foto6.jpg',
  mensagem: 'Mais uma memória especial! 💕'
}
```

## 🎵 Dicas para a Música

- Use arquivos MP3 para melhor compatibilidade
- Tamanho recomendado: menos de 10MB
- Escolha uma música especial para vocês dois!

## 💡 Sugestões de Mensagens

- "Nosso primeiro encontro... O início de tudo! ❤️"
- "Cada momento ao seu lado é um presente 💕"
- "Juntos somos mais fortes e felizes 🌟"
- "365 dias de amor e muitos mais pela frente! 💑"
- "Te amo hoje e sempre! 🎉❤️"

## 📁 Estrutura do Projeto

```
RAC/
├── public/
│   ├── fotos/          # Suas fotos aqui
│   │   ├── foto1.jpg
│   │   ├── foto2.jpg
│   │   └── ...
│   └── musica.mp3      # Sua música aqui
├── src/
│   ├── components/
│   │   ├── Carrossel.jsx      # Carrossel de fotos
│   │   ├── Carrossel.css
│   │   ├── ContadorTempo.jsx  # Contador em tempo real ⏱️
│   │   ├── ContadorTempo.css
│   │   ├── VideosYoutube.jsx  # Player de vídeos do YouTube 🎥
│   │   └── VideosYoutube.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## ❤️ Feito com Amor

Este site foi criado especialmente para comemorar momentos únicos e especiais. Personalize-o e torne-o ainda mais seu!

---

**Feliz Aniversário de Namoro! 🎉💕**

