import { render } from '@testing-library/react';
import CardSkeleton from './CardSkeleton';

describe('CardSkeleton Component', () => {
    it('should render a cardSkeleton', () => {
        const result = render(
            <CardSkeleton />
        );

        expect(result).toMatchSnapshot();
    });
});