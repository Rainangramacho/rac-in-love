# 📅 Como Alterar a Data de Início do Namoro

## 🎯 Passo a Passo

### 1. Abra o arquivo `src/App.jsx`

### 2. Procure pela linha 95 (aproximadamente):
```javascript
<ContadorTempo dataInicio="2024-10-25T00:00:00" />
```

### 3. Altere a data para o dia que vocês começaram a namorar

**Formato**: `AAAA-MM-DDTHH:MM:SS`

**Exemplos**:
- Se começaram em 15 de Janeiro de 2023: `dataInicio="2023-01-15T00:00:00"`
- Se começaram em 03 de Março de 2024: `dataInicio="2024-03-03T00:00:00"`
- Se começaram em 25 de Dezembro de 2022: `dataInicio="2022-12-25T00:00:00"`

### 4. Salve o arquivo

### 5. O contador será atualizado automaticamente!

---

## 🔄 Exemplo Completo

**ANTES:**
```javascript
<ContadorTempo dataInicio="2024-10-25T00:00:00" />
```

**DEPOIS** (exemplo para quem começou em 14 de Fevereiro de 2023):
```javascript
<ContadorTempo dataInicio="2023-02-14T00:00:00" />
```

---

## ⏰ Personalizando a Hora

Se vocês se lembram da hora exata que começaram a namorar, você pode adicionar também:

**Exemplo**: Se começaram às 20:30 do dia 15 de Junho de 2024:
```javascript
<ContadorTempo dataInicio="2024-06-15T20:30:00" />
```

---

## ✅ Pronto!

Agora o contador vai mostrar exatamente quanto tempo vocês já passaram juntos, atualizando em tempo real a cada segundo! ❤️

---

## 📝 Nota Importante

A data atual configurada é: **25 de Outubro de 2024**

Se esta não for a data real do início do namoro, não esqueça de alterá-la para que o contador mostre o tempo correto!

