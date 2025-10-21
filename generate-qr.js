const QRCode = require('qrcode');
const fs = require('fs');

// URL do site
const url = 'https://rainangramacho.github.io/rac-in-love/';

// Opções do QR Code
const options = {
  type: 'png',
  quality: 0.92,
  margin: 2,
  color: {
    dark: '#000000',  // Cor escura (código)
    light: '#FFFFFF'  // Cor clara (fundo)
  },
  width: 512,  // Tamanho da imagem
  errorCorrectionLevel: 'H'  // Alto nível de correção de erro
};

// Gerar QR Code
QRCode.toFile('qr-code-rac-in-love.png', url, options, (err) => {
  if (err) {
    console.error('Erro ao gerar QR Code:', err);
  } else {
    console.log('✅ QR Code gerado com sucesso!');
    console.log('📁 Arquivo salvo como: qr-code-rac-in-love.png');
    console.log('🔗 URL: https://rainangramacho.github.io/rac-in-love/');
  }
});

// Também gerar uma versão SVG
QRCode.toString(url, { type: 'svg', width: 512, margin: 2 }, (err, svg) => {
  if (err) {
    console.error('Erro ao gerar SVG:', err);
  } else {
    fs.writeFileSync('qr-code-rac-in-love.svg', svg);
    console.log('📁 SVG salvo como: qr-code-rac-in-love.svg');
  }
});
