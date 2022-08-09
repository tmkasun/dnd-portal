import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RatingProvider } from '../data/Providers';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <MemoryRouter>
    <RatingProvider>{children}</RatingProvider>
  </MemoryRouter>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
