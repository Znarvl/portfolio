import { expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '../components/Footer'
import SocialMedia from '../components/SocialMedia'

test('Email is in footer', () => {
  render(<Footer />)
  expect(screen.getByText('simme.jakobsson@gmail.com')).toBeInTheDocument()
})

test('Smoke test: SocialMedia component', () => {
  render(<SocialMedia />)
})

test('clicking LinkedIn icon navigates to LinkedIn profile', () => {
  const { getByTestId } = render(<SocialMedia />)
  const linkedInIcon = getByTestId('LinkedInIcon')
  fireEvent.click(linkedInIcon)
})

test('clicking GitHub icon navigates to GitHub profile', () => {
  const { getByTestId } = render(<SocialMedia />)
  const githubIcon = getByTestId('GitHubIcon')
  fireEvent.click(githubIcon)
})
