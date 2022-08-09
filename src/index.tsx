import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './components/AppRoutes';
import { RatingProvider } from './data/Providers';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <RatingProvider>
        <App />
      </RatingProvider>
    </StrictMode>
  );
}
