import { render } from '@testing-library/react';
import List from './List';
import characterMock from '../../api/__mock__/characterMock';

jest.mock('../Card/Card', () => () => <span>Card</span>);

describe('List Component', () => {
    it('should render a footer', () => {
        const result = render(
            <List characters={characterMock.results} />
        );

        expect(result).toMatchSnapshot();
    });
});
