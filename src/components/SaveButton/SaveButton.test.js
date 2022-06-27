import React from 'react'
import SaveButton from './SaveButton'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


describe('SaveButton', () => {

  it('should render', () => {
    render(<SaveButton saved={false} />)
    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.queryByTestId('button-clicked')).toBeNull()
  })

  it('should add saved testid value', () => {
    render(<SaveButton saved={false} />)
    const button = screen.getByRole('button')

    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.queryByTestId('button-clicked')).toBeNull()

    userEvent.click(button)

    expect(screen.queryByTestId('button')).toBeNull()
    expect(screen.getByTestId('button-clicked')).toBeInTheDocument()

    userEvent.click(button)

    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.queryByTestId('button-clicked')).toBeNull()
  })

  it('should be clicked by default', () => {
    render(<SaveButton saved={true} />)
    expect(screen.getByTestId('button-clicked')).toBeInTheDocument()
    expect(screen.queryByTestId('button')).toBeNull()
  })

})