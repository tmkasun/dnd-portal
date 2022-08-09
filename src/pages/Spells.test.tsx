import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from '../tests/test-utils';

import SpellsPage from './Spells';

describe('Test Spells listing page component', () => {
  test('Should render spells table & spells should be visible', async () => {
    render(<SpellsPage />);
    expect(screen.getByText(/loading \.\.\./i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading \.\.\./i)).not.toBeInTheDocument();
    });
    expect(
      screen.getByRole('link', {
        name: /kasun test index/i,
      })
    ).toBeInTheDocument();

    const row = screen.getByRole('row', {
      name: /kasun test index view ★/i,
    });

    expect(
      within(row).getByRole('link', {
        name: /view/i,
      })
    ).toBeInTheDocument();
  });

  test('Should render spell categories', async () => {
    render(<SpellsPage />);
    expect(
      screen.getByRole('button', {
        name: /druid/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /sorcerer/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /warlock/i,
      })
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading \.\.\./i)).not.toBeInTheDocument();
    });
  });

  test.skip('Should be able to switch between categories', async () => {
    render(<SpellsPage />);

    expect(
      screen.getByRole('button', {
        name: /druid/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/loading \.\.\./i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading \.\.\./i)).not.toBeInTheDocument();
    });
    expect(
      screen.getByRole('link', {
        name: /true polymorph/i,
      })
    ).toBeInTheDocument();
    userEvent.click(
      screen.getByRole('button', {
        name: /druid/i,
      })
    );
    await waitFor(() =>
      expect(screen.getByText(/loading \.\.\./i)).toBeInTheDocument()
    );
    await waitForElementToBeRemoved(() => screen.getByText(/loading \.\.\./i));
    await screen.findByRole('link', {
      name: /true polymorph/i,
    });
  });
});
