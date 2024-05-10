import { render } from '@testing-library/react';
import List from './List';
import characterMock from '../../api/__mock__/characterMock';

describe('List Component', () => {
    it('should render a footer', () => {
        const result = render(
            <List characters={characterMock.results} />
        );

        expect(result).toMatchSnapshot();
    });
});
