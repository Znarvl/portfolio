import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Portfolio from '../components/Portfolio'

test('renders correct number of portfolio items', () => {
  const { getAllByTestId } = render(<Portfolio />)

  // Assuming each PortfolioItem has a data-testid attribute
  const portfolioItems = getAllByTestId('portfolio')

  // Check if the number of rendered PortfolioItems matches the expected number
  expect(portfolioItems).toHaveLength(4)
})
