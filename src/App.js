import PageContent from './components/PageContent';
import MenuBar from './components/MenuBar';
import { GlobalStateProvider } from './commons/globalState';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalStateProvider>
          <MenuBar />
          <PageContent />
        </GlobalStateProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
