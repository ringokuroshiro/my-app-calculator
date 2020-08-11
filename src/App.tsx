import React, { useState } from 'react'
import './App.css';
import calculator, { InputType } from './calculator'


type InputArray = Array<InputType>
type InputHis = Array<InputArray>


function App() {
  const [input, setInput] = useState<InputArray>([])

  function handleClickNumber(i: InputType) {
    const newInputArray = Array.from(input)
    setInput(newInputArray.concat(i))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <DisplayArea value={calculator(input)} />
        </div>
        <NumberButton handleClick={handleClickNumber} onClear={() => setInput([])} />
      </header>
    </div>
  );
}
const DisplayArea = (props: { value: string }) => {
  return (
    <div className="number-box">
      <p>{props.value}</p>
    </div>)
}

interface NumberButtonProps {
  handleClick: (i: InputType) => void
  onClear: () => void
}
const NumberButton = (props: NumberButtonProps) => {
  return (
    <div>
      <div className="number-row-789" >
        <button className="btn-flat-border" onClick={() => props.handleClick("7")} >{'7'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("8")} >{'8'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("9")} >{'9'}</button>
      </div>
      <div className="number-row-456" >
        <button className="btn-flat-border" onClick={() => props.handleClick("4")} >{'4'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("5")} >{'5'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("6")} >{'6'}</button>
      </div>
      <div className="number-row-123">
        <button className="btn-flat-border" onClick={() => props.handleClick("1")} >{'1'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("2")} >{'2'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("3")} >{'3'}</button>
      </div>
      <div className="number-row-0">
        <button className="btn-flat-border" onClick={() => props.handleClick("0")}>{'0'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick(".")}>{'.'}</button>
      </div>
      <div className="operator-row">
        <button className="btn-flat-border" onClick={() => props.handleClick("=")}>{'='}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("+")}>{'+'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("-")}>{'-'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("*")}>{'*'}</button>
        <button className="btn-flat-border" onClick={() => props.handleClick("/")}>{'/'} </button>
        <button className="btn-flat-border" onClick={props.onClear}>{'AC'}</button>
      </div>
    </div>
  );
}

export default App;
