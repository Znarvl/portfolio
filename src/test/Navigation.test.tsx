import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navigation from '../components/Navigation'

describe('App', () => {
  it('Vite to be in document', () => {
    render(<Navigation />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })
})
