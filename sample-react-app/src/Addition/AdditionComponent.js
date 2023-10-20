import React, { useState } from 'react'

const AdditionComponent = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const handleNum1Change = (e) => {
    setNum1(parseInt(e.target.value, 10))
  }

  const handleNum2Change = (e) => {
    setNum2(parseInt(e.target.value, 10))
  }

  const handleAddition = () => {
    setResult(num1 + num2)
  }

  return (
    <div>
      <label htmlFor="num1">Number 1:</label>
      <input type="number" id="num1" value={num1} onChange={handleNum1Change} />

      <label htmlFor="num2">Number 2:</label>
      <input type="number" id="num2" value={num2} onChange={handleNum2Change} />

      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  )
}

export default AdditionComponent
