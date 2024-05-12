import { render } from '@testing-library/react';
import { Link, useParams } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import Profile from './Profile';
import characterMock from '../../api/__mock__/characterMock';

jest.mock('react-router-dom', () => ({
    Link: jest.fn(),
    useParams: jest.fn(),
}));

jest.mock('../../hooks/useStore', () => jest.fn());

window.scrollTo = jest.fn();
const scrollToMock = jest.spyOn(window, 'scrollTo');

(Link as unknown as jest.Mock).mockImplementation(() => <span>Link</span>);
(useStore as unknown as jest.Mock).mockImplementation(
    (fn) => fn({ characters: characterMock.results })
);

describe('Profile Component', () => {
    it('should render component', () => {
        (useParams as unknown as jest.Mock).mockReturnValue({ id: 361 });

        const result = render(<Profile />);

        expect(result).toMatchSnapshot();
        expect(scrollToMock).toHaveBeenCalledWith(0, 0);
        scrollToMock.mockRestore();
    });

    it('should render skeleton when character no exist', () => {
        (useParams as unknown as jest.Mock).mockReturnValue({ id: 44 });

        const result = render(<Profile />);

        expect(result).toMatchSnapshot();
    });
});
