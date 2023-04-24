import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '.';
import { InputAdornment } from '@mui/material';
import user from '@testing-library/user-event';
import Icon from '../Icon';
import eye from '../../../../public/images/eye.svg';

describe('Textfield', () => {
  test('Input element renders correctly', () => {
    render(<TextField />);
    const inputElement = screen.getByRole(/textbox/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('Placeholder should work correctly', () => {
    render(<TextField placeholder="Search a Candidate" />);
    expect(
      screen.getByPlaceholderText(/search a candidate/i)
    ).toBeInTheDocument();
  });

  test('image element used in Input end adornment', () => {
    render(
      <TextField
        placeholder="Enter Password"
        endAdornment={
          <InputAdornment position="end">
            <Icon src={eye} alt="hidden icon" />
          </InputAdornment>
        }
      />
    );
    const imageElement = screen.getByRole(/img/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', eye);
    expect(imageElement).toHaveAttribute('alt', 'hidden icon');
  });

  test('adds attributes correctly', () => {
    render(<TextField type="text" />);
    expect(screen.getByRole(/textbox/i)).toHaveAttribute('type', 'text');
  });

  test('should have defaultValue correctly', () => {
    render(<TextField type="text" defaultValue="enter name" />);
    expect(screen.getByRole(/textbox/i)).toHaveValue('enter name');
  });

  test('testing the id', () => {
    render(<TextField data-testid="outlined-basic" />);
    expect(screen.getByTestId('outlined-basic')).toBeInTheDocument();
  });

  test('change event', async () => {
    render(<TextField />);
    const inputElement = screen.getByRole(/textbox/i);
    await user.type(inputElement, 'kavya');
    expect(inputElement).toHaveValue('kavya');

    await user.clear(inputElement);
    expect(inputElement).toHaveValue('');
  });

  test('is visible in the UI', () => {
    render(<TextField type="text" defaultValue="kavya" />);
    expect(screen.getByRole(/textbox/i)).toBeVisible();
  });

  test('invalid attributes', () => {
    render(<TextField />);
    expect(screen.getByRole(/textbox/i)).not.toHaveAttribute('label', 'Name');
    expect(screen.getByRole(/textbox/i)).not.toHaveAttribute(
      'helperText',
      'Enter atleast 8 characters'
    );
  });

  test('Should focus on the input element', async () => {
    render(<TextField />);
    await user.type(screen.getByRole('textbox'), 'A Random Value');
    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});
