import React from 'react'
import Vote from './Vote'
import { render, screen } from '@testing-library/react'

describe('Vote', () => {

  it('should render with empty vote', () => {
    render(<Vote likes={false} />)
    expect(screen.getByTestId('upvote')).not.toHaveClass('')
    expect(screen.getByTestId('downvote')).not.toHaveClass('')
  })

})