import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('App', () => {
  it('should render needed components', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
    expect(screen.queryByTestId('coin-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('single-coin')).not.toBeInTheDocument();
  });

  it('should enable button when input has value', () => {
    render(<App />);
    expect(screen.getByRole('button')).toBeDisabled();

    userEvent.type(screen.getByRole('textbox'), 'btc');

    expect(screen.getByRole('button')).toBeEnabled();
  });

});
