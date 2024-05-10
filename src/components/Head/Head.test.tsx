import { render } from '@testing-library/react';
import Head from './Head';

describe('Head Component', () => {
    it('should render a footer', () => {
        const result = render(
            <Head />
        );

        expect(result).toMatchSnapshot();
    });
});
