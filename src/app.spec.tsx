/// <reference types="vitest-dom/extend-expect" />
import { render } from '@testing-library/preact'
import { h } from 'preact'
import { App } from './app'

describe('App', () => {
  it('should display the logos', () => {
    const instance = render(<App />)
    expect(instance.getByRole('img', { name: 'Vite logo' })).toBeVisible()
    expect(instance.getByRole('img', { name: 'Preact logo' })).toBeVisible()
  })
})
