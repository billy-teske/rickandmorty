import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    it('should render a footer', () => {
        const result = render(
            <Footer />
        );

        expect(result).toMatchSnapshot();
    });
});