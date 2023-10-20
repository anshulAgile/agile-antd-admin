import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'style/global';

import { ErrorBoundary } from '../components/common/Error';
import { LoaderWrapper } from 'components/common/loader';

import { setupAxios } from '../utils/functions';
import Routes from './routes';

setupAxios();

const queryClient = new QueryClient();

const AppContainer = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <LoaderWrapper>
            <h6 style={{ textAlign: 'center' }}>Loading</h6>
          </LoaderWrapper>
        }
      >
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </ErrorBoundary>
);

export default AppContainer;
