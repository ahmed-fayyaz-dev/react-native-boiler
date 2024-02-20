import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: true,
      // refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
