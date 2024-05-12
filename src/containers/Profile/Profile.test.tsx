import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
import useCharacter from '../../hooks/useCharacter';
import Profile from './Profile';
import characterMock from '../../api/__mock__/characterMock';

jest.mock('react-router-dom', () => ({
    Link: jest.fn(),
}));

jest.mock('../../hooks/useCharacter', () => jest.fn());

window.scrollTo = jest.fn();
const scrollToMock = jest.spyOn(window, 'scrollTo');

(Link as unknown as jest.Mock).mockImplementation(() => <span>Link</span>);

describe('Profile Component', () => {
    it('should render component', () => {
        (useCharacter as jest.Mock).mockReturnValue({
            character: characterMock.results[0],
        });

        const result = render(<Profile />);

        expect(result).toMatchSnapshot();
        expect(scrollToMock).toHaveBeenCalledWith(0, 0);
        scrollToMock.mockRestore();
    });

    it('should render skeleton when character no exist', () => {
        (useCharacter as jest.Mock).mockReturnValue({
            character: null,
        });

        const result = render(<Profile />);

        expect(result).toMatchSnapshot();
    });
});
