import { render } from '@testing-library/react';
import Landing from './Landing';
import Head from '../components/Head/Head';
import List from '../components/List/List';
import Footer from '../components/Footer/Footer';
import CardSkeleton from '../components/Card/CardSkeleton';
import useCharacter from '../hooks/useCharacter';
import characterMock from '../api/__mock__/characterMock';

jest.mock('../components/Head/Head', () => jest.fn());
jest.mock('../components/List/List', () => jest.fn());
jest.mock('../components/Footer/Footer', () => jest.fn());
jest.mock('../components/Card/CardSkeleton', () => jest.fn());
jest.mock('../hooks/useCharacter', () => jest.fn());

(Head as jest.Mock).mockImplementation(() => <span>Head</span>);
(List as jest.Mock).mockImplementation(() => <span>List</span>);
(Footer as jest.Mock).mockImplementation(() => <span>Footer</span>);
(CardSkeleton as jest.Mock).mockImplementation(() => <span>CardSkeleton</span>);

describe('Landing Component', () => {
    it('should render Landing when load characters', () => {
        (useCharacter as jest.Mock).mockReturnValue({
            isFetching: true,
        });

        const result = render(
            <Landing />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render Landing when the api have a error', () => {
        (useCharacter as jest.Mock).mockReturnValue({
            error: true,
        });

        const result = render(
            <Landing />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render Landing with characters', () => {
        (useCharacter as jest.Mock).mockReturnValue({
            characters: characterMock.results
        });

        const result = render(
            <Landing />
        );

        expect(result).toMatchSnapshot();
    });
});
