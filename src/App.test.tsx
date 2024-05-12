import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head/Head';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import App from "./App";

jest.mock('react-query', () => ({
    QueryClient: jest.fn(),
    QueryClientProvider: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    BrowserRouter: jest.fn(),
    Routes: jest.fn(),
    Route: jest.fn(),
}));
jest.mock('./components/Head/Head', () => jest.fn());
jest.mock('./components/Footer/Footer', () => jest.fn());
jest.mock('./containers/Home/Home', () => jest.fn());
jest.mock('./containers/Profile/Profile', () => jest.fn());

(Head as jest.Mock).mockImplementation(() => <span>Head</span>);
(Footer as jest.Mock).mockImplementation(() => <span>Footer</span>);
(Home as jest.Mock).mockImplementation(() => <span>Home</span>);
(Profile as jest.Mock).mockImplementation(() => <span>Profile</span>);

(QueryClient as jest.Mock).mockReturnValue(Object);
(QueryClientProvider as jest.Mock).mockImplementation(({ children }) => (
    <div>{children}</div>
));
(Router as jest.Mock).mockImplementation(({ children }) => (
    <div>{children}</div>
));
(Routes as jest.Mock).mockImplementation(({ children }) => (
    <div>{children}</div>
));
(Route as jest.Mock).mockImplementation(({ element }) => (
    <div>{element}</div>
));

describe('App Component', () => {
    it('should render the component', () => {
        const result = render(<App />);

        expect(result).toMatchSnapshot();
    });
});
