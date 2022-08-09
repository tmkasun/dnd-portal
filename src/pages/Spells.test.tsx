import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, within } from '../tests/test-utils';

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

  test('Should render spells categories', async () => {
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
  });

  test('Should be able to switch between categories', async () => {
    render(<SpellsPage />);
    expect(
      screen.getByRole('button', {
        name: /druid/i,
      })
    ).toBeInTheDocument();
    userEvent.click(
      screen.getByRole('button', {
        name: /druid/i,
      })
    );
    expect(screen.getByText(/loading \.\.\./i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading \.\.\./i)).not.toBeInTheDocument();
    });
    expect(
      screen.getByRole('link', {
        name: /true polymorph/i,
      })
    ).toBeInTheDocument();
  });
});
