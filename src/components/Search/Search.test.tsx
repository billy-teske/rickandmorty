import { render } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
    it('should render a footer', () => {
        const result = render(
            <Search />
        );

        expect(result).toMatchSnapshot();
    });
});
