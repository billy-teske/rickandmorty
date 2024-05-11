import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head/Head';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Head />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="profile/:id" element={<Profile />} />
                </Routes>
            </Router>
            <Footer />
        </QueryClientProvider>
    );
};

export default App;
