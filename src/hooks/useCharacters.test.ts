import { renderHook } from '@testing-library/react';
import { useQuery } from 'react-query';
import getCharacter from '../api/getCharacter';
import useCharacters from './useCharacters';
import useStore from './useStore';
import characterMock from '../api/__mock__/characterMock';

jest.mock('react-query', () => ({
    useQuery: jest.fn(),
}));
jest.mock('../api/getCharacter', () => jest.fn());
jest.mock('./useStore', () => jest.fn());

const mockGetCharacter = jest.fn();
(getCharacter as jest.Mock).mockImplementation(mockGetCharacter);

const mockSetCharacters = jest.fn();
const mockToPage = jest.fn();
const mockToNextPage = jest.fn();

(useStore as unknown as jest.Mock).mockImplementation((fn) => {
    fn();
    return {
        characters: characterMock.results,
        setCharacters: mockSetCharacters,
        page: 1,
        toPage: mockToPage,
        nextPage: 2,
        toNextPage: mockToNextPage,
    };
});

describe('useCharacter hook', () => {
    it('should return isFetching', () => {
        (useQuery as jest.Mock).mockReturnValue({
            isFetching: true,
            refetch: jest.fn(),
        });

        const { result } = renderHook(() => useCharacters());

        expect(result.current.isFetching).toBeTruthy();
    });

    it('should return error', () => {
        (useQuery as jest.Mock).mockReturnValue({
            error: true,
            refetch: jest.fn(),
        });

        const { result } = renderHook(() => useCharacters());

        expect(result.current.error).toBeTruthy();
    });

    it('should return characters', () => {
        (useQuery as jest.Mock).mockImplementation(({ queryFn, onSuccess }) => {
            queryFn();
            onSuccess(characterMock);

            return {
                refetch: jest.fn(),
            };
        });

        const { result } = renderHook(() => useCharacters());

        expect(mockGetCharacter).toHaveBeenCalled();
        expect(mockSetCharacters).toHaveBeenCalled();
        expect(mockToPage).toHaveBeenCalled();
        expect(result.current.characters).toEqual(characterMock.results);
    });

    it('should return empty characters when it does not return data', () => {
        const mockSetCharactersWhenEmptyData = jest.fn();
        (useStore as unknown as jest.Mock).mockReturnValue({
            characters: [],
            setCharacters: mockSetCharactersWhenEmptyData,
            page: 1,
            toPage: mockToPage,
            nextPage: 2,
            toNextPage: mockToNextPage,
        });

        (useQuery as jest.Mock).mockImplementation(({ onSuccess }) => {
            onSuccess();

            return {
                refetch: jest.fn(),
            };
        });

        renderHook(() => useCharacters());

        expect(mockSetCharactersWhenEmptyData).toHaveBeenCalledWith([]);
    });
});
