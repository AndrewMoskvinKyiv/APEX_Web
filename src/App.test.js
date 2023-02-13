import { render, screen } from '@testing-library/react';
import Root from "./root";


test('renders "Your Name" link', () => {
  render(<Root />);
  const linkElement = screen.getByText(/Your Name/i);
  expect(linkElement).toBeInTheDocument();
});
