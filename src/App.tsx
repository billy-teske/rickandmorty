import { QueryClient, QueryClientProvider } from 'react-query';
import Landing from './containers/Landing';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Landing />
        </QueryClientProvider>
    );
};

export default App;
