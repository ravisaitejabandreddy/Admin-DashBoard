import { render, screen } from '@testing-library/react';
import { UserInfo } from '.';
import vector from '../../../../public/images/vector.svg';
describe('User information', () => {
  test('User detail is in the document', () => {
    render(<UserInfo icon={vector} property="Name" value="John Smith" />);
    const res = screen.getByTestId('card');
    expect(res).toBeInTheDocument();
  });
  test('User detail is in the document when name is empty', () => {
    render(<UserInfo icon={vector} property="Name" value="" />);
    const res = screen.getByText('-');
    expect(res).toBeInTheDocument();
  });
});
