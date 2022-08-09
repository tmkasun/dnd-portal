import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { screen, waitFor } from '../tests/test-utils';
import SpellPage from './Spell';

describe('Test Spell details page component', () => {
  test('Should render spell details page with mocked data', async () => {
    render(
      <MemoryRouter initialEntries={['/spells/foo']}>
        <Routes>
          <Route path="/spells/:spellIndex" element={<SpellPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        name: /loading \. \. \./i,
      })
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.queryByRole('heading', {
          name: /loading \. \. \./i,
        })
      ).not.toBeInTheDocument();
    });
    await screen.findByRole('heading', {
      name: /tmkasun mocked spell/i,
    });
  });
});
