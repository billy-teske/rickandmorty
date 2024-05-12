import { render } from '@testing-library/react';
import Home from './Home';
import Head from '../../components/Head/Head';
import List from '../../components/List/List';
import Footer from '../../components/Footer/Footer';
import CardSkeleton from '../../components/Card/CardSkeleton';
import useCharacters from '../../hooks/useCharacters';
import characterMock from '../../api/__mock__/characterMock';

jest.mock('../../components/Head/Head', () => jest.fn());
jest.mock('../../components/List/List', () => jest.fn());
jest.mock('../../components/Footer/Footer', () => jest.fn());
jest.mock('../../components/Card/CardSkeleton', () => jest.fn());
jest.mock('../../hooks/useCharacters', () => jest.fn());

(Head as jest.Mock).mockImplementation(() => <span>Head</span>);
(List as jest.Mock).mockImplementation(() => <span>List</span>);
(Footer as jest.Mock).mockImplementation(() => <span>Footer</span>);
(CardSkeleton as jest.Mock).mockImplementation(() => <span>CardSkeleton</span>);

describe('Home Component', () => {
    it('should render Home when load characters', () => {
        (useCharacters as jest.Mock).mockReturnValue({
            characters: [],
            isFetching: true,
        });

        const result = render(
            <Home />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render Home when the api have a error', () => {
        (useCharacters as jest.Mock).mockReturnValue({
            characters: [],
            error: true,
        });

        const result = render(
            <Home />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render Home with characters', () => {
        (useCharacters as jest.Mock).mockReturnValue({
            characters: characterMock.results
        });

        const result = render(
            <Home />
        );

        expect(result).toMatchSnapshot();
    });
});
