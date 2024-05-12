import { render } from '@testing-library/react';
import Card from './Card';

jest.mock('react-router-dom', () => ({
    Link: () => <span>Link</span>,
}));

describe('Card Component', () => {
    it('should render a card', () => {
        const result = render(
            <Card
                id={12}
                gender="Male"
                image="https://rickandmortyapi.com/api/character/avatar/190.jpeg"
                name="Rick"
                species="Human"
                status="Normal"
                type="JK"
            />
        );

        expect(result).toMatchSnapshot();
    });
});