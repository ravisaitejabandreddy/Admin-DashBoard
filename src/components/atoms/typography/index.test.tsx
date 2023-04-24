import { TypographyComponent } from '.';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Typography', () => {
  test('h1', () => {
    render(<TypographyComponent variant="h1">H1</TypographyComponent>);
    const result = screen.getByRole('heading');
    expect(result).toBeInTheDocument();
  });
  test('h2', () => {
    render(<TypographyComponent variant="h2">H2</TypographyComponent>);
    const result = screen.getByRole('heading');
    expect(result).toBeInTheDocument();
  });
  test('subtitle1', () => {
    render(
      <TypographyComponent variant="subtitle1">SubTitle1</TypographyComponent>
    );
    const result = screen.getByText('SubTitle1');
    expect(result).toBeInTheDocument();
  });
  test('body1', () => {
    render(<TypographyComponent variant="body1">Body1</TypographyComponent>);
    const result = screen.getByText('Body1');
    expect(result).toBeInTheDocument();
  });
  test('caption', () => {
    render(
      <TypographyComponent variant="caption">Caption</TypographyComponent>
    );
    const result = screen.getByText('Caption');
    expect(result).toBeInTheDocument();
  });
  test('caption2', () => {
    render(
      <TypographyComponent variant="caption2">Caption2</TypographyComponent>
    );
    const result = screen.getByText('Caption2');
    expect(result).toBeInTheDocument();
  });
});
