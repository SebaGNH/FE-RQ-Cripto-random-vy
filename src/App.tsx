import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './Router/AppRouter';


// Create a client
const queryClient = new QueryClient()
const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
  </QueryClientProvider>
  )
}

export default App