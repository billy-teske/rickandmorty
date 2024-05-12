import { render } from '@testing-library/react';
import characterMock from '../../api/__mock__/characterMock';
import useStore from '../../hooks/useStore';
import Card from '../Card/Card';
import List from './List';

jest.mock('../../hooks/useStore', () => jest.fn());
jest.mock('../Card/Card', () => jest.fn());

(Card as jest.Mock).mockImplementation(() => <span>Card</span>);

describe('List Component', () => {
    it('should render a list', () => {
        (useStore as unknown as jest.Mock).mockImplementation((fn) => {
            fn({ filter: null });
            return null;
        });

        const result = render(
            <List characters={characterMock.results} />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render a list when find name', () => {
        (useStore as unknown as jest.Mock).mockImplementation((fn) => {
            fn({ filter: 'rick' });
            return 'rick';
        });

        const result = render(
            <List characters={characterMock.results} />
        );

        expect(result).toMatchSnapshot();
    });

    it('should render a list when find species', () => {
        (useStore as unknown as jest.Mock).mockImplementation((fn) => {
            fn({ filter: 'Humanoid' });
            return 'Humanoid';
        });

        const result = render(
            <List characters={characterMock.results} />
        );

        expect(result).toMatchSnapshot();
    });
});
