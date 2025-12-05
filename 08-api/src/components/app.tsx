import Counter from './counter';
import Posts from './posts';
import Users from './users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Counter />
      <Posts />
      <Users />
    </QueryClientProvider>
  );
}
