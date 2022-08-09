import { rest } from 'msw';
import { mockSpellByIndex, mockSpellsByClass } from './data';

export const handlers = [
  rest.get('https://www.dnd5eapi.co/api/classes/*/spells', (req, res, ctx) =>
    res(ctx.json(mockSpellsByClass))
  ),
  rest.get('https://www.dnd5eapi.co/api/spells/*', (req, res, ctx) =>
    res(ctx.json(mockSpellByIndex))
  ),
];
