import { useState } from 'react';

import Button from './components/Button/index.js';
import Input from './components/Input/index.js'

import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    console.log(number);
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('')
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('')
    }
  }

  const handleTimesNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('')
    }
  }

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('')
    }
  }

  const handleDecimal = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => (prev === '0' ? '0.' : `${prev}.`))
    }
  }

  const handleToggleSign = () => {
    if (currentNumber === '0') return;
    if (currentNumber.startsWith('-')) {
      setCurrentNumber(currentNumber.slice(1))
    } else {
      setCurrentNumber(`-${currentNumber}`)
    }
  }

  const handlePercent = () => {
    const curr = Number(currentNumber)
    const first = Number(firstNumber)
    if (operation === '+' || operation === '-') {
      // percent relative to first number
      if (firstNumber !== '0') {
        const percentOfFirst = (first * curr) / 100
        setCurrentNumber(String(percentOfFirst))
      } else {
        setCurrentNumber(String(curr / 100))
      }
    } else if (operation === '*' || operation === '/') {
      setCurrentNumber(String(curr / 100))
    } else {
      setCurrentNumber(String(curr / 100))
    }
  }

  const compute = () => {
    const a = Number(firstNumber)
    const b = Number(currentNumber)
    switch (operation) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return b === 0 ? 'Erro' : a / b
      default:
        return b
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      const result = compute()
      setCurrentNumber(String(result))
      setFirstNumber('0')
      setOperation('')
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"C"} variant="utility" onClick={() => handleOnClear()} />
          <Button label={"±"} variant="utility" onClick={handleToggleSign} />
          <Button label={"%"} variant="utility" onClick={handlePercent} />
          <Button label={"/"} variant="operator" onClick={handleDivisionNumbers} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"-"} variant="operator" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"+"} variant="operator" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"X"} variant="operator" onClick={handleTimesNumbers} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')} />
          <Button label={","} onClick={handleDecimal} />
          <Button label={"="} variant="equals" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
