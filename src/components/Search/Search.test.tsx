import { act, fireEvent, render, waitFor } from '@testing-library/react';
import useStore from '../../hooks/useStore';
import Search from './Search';

jest.mock('../../hooks/useStore', () => jest.fn());

const mockSetFilter = jest.fn();
(useStore as unknown as jest.Mock).mockImplementation((fn) => {
    fn();
    return {
        setFilter: mockSetFilter,
    };
});

describe('Search Component', () => {
    it('should render a footer', () => {
        const result = render(
            <Search />
        );

        expect(result).toMatchSnapshot();
    });

    it('should set filter when change search box', () => {
        const result = render(
            <Search />
        );

        const { getByTestId } = result;
        const inputSearch = getByTestId('search');
        act(() => {
            fireEvent.change(inputSearch, {
                target: {
                    value: 'a'
                }
            });
        });

        waitFor(() => {
            expect(mockSetFilter).toHaveBeenCalled();
        });
    });

    it('should ignore form event submit', () => {
        const mockPreventDefault = jest.fn();
        const result = render(
            <Search />
        );

        const { getByTestId } = result;
        const formSearch = getByTestId('form');

        act(() => {
            fireEvent.submit(formSearch, { preventDefault: mockPreventDefault });
        });

        waitFor(() => {
            expect(mockPreventDefault).toHaveBeenCalled();
        });
    });
});
