import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import AdditionComponent from './AdditionComponent'

describe('AdditionComponent', () => {
  it('renders without crashing', () => {
    render(<AdditionComponent />)
  })

  it('updates result state on addition', () => {
    render(<AdditionComponent />)

    // Set input values
    const input1 = screen.getByLabelText(/Number 1/i)
    fireEvent.change(input1, { target: { value: '5' } })

    const input2 = screen.getByLabelText(/Number 2/i)
    fireEvent.change(input2, { target: { value: '3' } })

    // Trigger addition
    const addButton = screen.getByRole('button', { name: /add/i })
    fireEvent.click(addButton)

    // Check if result is updated
    const resultText = screen.getByText(/Result/i)

    expect(resultText.textContent).toEqual('Result: 8')
  })
})
