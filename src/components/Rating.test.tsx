import { render, screen } from '../tests/test-utils';
import Rating from './Rating';

describe('Test Rating component', () => {
  test('Should render with ★ symbol', async () => {
    render(<Rating rated />);
    expect(
      screen.getByRole('button', {
        name: /★/i,
      })
    ).toBeInTheDocument();
  });
});
