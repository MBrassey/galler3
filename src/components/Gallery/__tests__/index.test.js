// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const architecture = { name: "architecture", description: "Accent of architecture" };


afterEach(cleanup)

describe('Gallery component', () => {

  it('renders', () => {
    render(<Gallery currentCategory={architecture} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={architecture} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Gallery currentCategory={architecture} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Architecture')
})