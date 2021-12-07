import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
