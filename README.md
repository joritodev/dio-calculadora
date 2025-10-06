# Calculadora React – DIO React Developer

Este é um pequeno projeto de calculadora desenvolvido durante o curso React Developer da DIO, focado em praticar fundamentos do React, componentização e estilização com styled-components.

## Objetivo do Projeto
Construir uma calculadora funcional e responsiva, praticando:
- Estados e gerenciamento de dados com `useState`
- Componentização (separação em `Button`, `Input` e estrutura de layout)
- Estilização com `styled-components`
- Boas práticas de eventos (`onClick`) e prevenção de re-renderizações infinitas
- Organização de lógica de operações aritméticas

## Demonstração das Funcionalidades
- Entrada numérica: 0–9
- Operadores: `+`, `-`, `X`, `/`
- Utilidades: `C` (limpar), `±` (trocar sinal), `%` (percentual), `,` (decimal)
- `=` para calcular o resultado
- Tratamento de erro em divisão por zero (exibe "Erro")

## Tecnologias Utilizadas
- React 19 (CRA – react-scripts)
- Styled-components
- JavaScript (ES2020+)

## Como Rodar o Projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
3. Acesse em `http://localhost:3000`.

## Estrutura de Pastas
```
src/
  App.js                 # Componente principal e lógica da calculadora
  index.js               # Bootstrap da aplicação React
  styles.js              # Layout base (Container, Content, Row)
  components/
    Button/
      index.js           # Componente de botão reutilizável com variants
      styles.js          # Estilos do botão (operator, utility, equals)
    Input/
      index.js           # Componente de display
      styles.js          # Estilos do display
```

## Decisões de Implementação
- Componentes pequenos e focados (SRP): `Button` e `Input` isolam responsabilidades.
- Variants no botão (`operator`, `utility`, `equals`) para estilos consistentes e sem lógica condicional duplicada.
- Lógica aritmética centralizada:
  - `operation` (estado) define a operação corrente
  - `firstNumber` guarda o operando anterior
  - `currentNumber` recebe os dígitos e participa do cálculo
  - Funções auxiliares:
    - `compute()` concentra o cálculo de `+`, `-`, `*`, `/`
    - `handlePercent()` trata `%` respeitando contexto (ex.: `%` relativo ao primeiro operando)
    - `handleDecimal()` impede múltiplos pontos
    - `handleToggleSign()` troca sinal sem afetar `0`
- Prevenção de re-render infinito: eventos `onClick` recebem referências de função (ex.: `onClick={handleSumNumbers}`), nunca executam durante o render (evitando `onClick={handleSumNumbers()}`).

## Pontos de Aprendizado (React/DIO)
- useState: controle de múltiplos estados e atualização baseada no valor anterior
- Eventos e renderização: passar handlers corretamente para evitar loops
- Renderização declarativa: UI reflete o estado atual, sem manipular DOM diretamente
- Styled-components: CSS-in-JS com temas/variants e organização por componente
- Tratamento de bordas: divisão por zero, limite de casas decimais e reset do fluxo

## Próximos Passos (Opcional)
- Exibir a operação em andamento (ex.: "12 +")
- Histórico de operações/resultados
- Teclado físico: mapear `keydown` para acionar os mesmos handlers
- Internacionalização de decimal (ponto vs vírgula) e formatação com `Intl.NumberFormat`

## Licença
Uso educacional no contexto do curso DIO React Developer.
