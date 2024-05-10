import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    it('should render a card', () => {
        const result = render(
            <Card
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