import { renderHook } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import getCharacter from '../api/getCharacter';
import useStore from './useStore';
import characterMock from '../api/__mock__/characterMock';
import useCharacter from './useCharacter';

jest.mock('react-router-dom', () => ({
    useParams: jest.fn(),
}));
jest.mock('react-query', () => ({
    useQuery: jest.fn(),
}));
jest.mock('../api/getCharacter', () => jest.fn());
jest.mock('./useStore', () => jest.fn());

const mockSetCharacters = jest.fn();
(useStore as unknown as jest.Mock).mockImplementation((fn) => fn({
    characters: characterMock.results,
    setCharacters: mockSetCharacters,
}));

const mockGetCharacter = jest.fn();
(getCharacter as jest.Mock).mockImplementation(mockGetCharacter);

describe('useCharacter Hook', () => {
    it('should return a character data source store', () => {
        (useParams as unknown as jest.Mock).mockReturnValue({ id: '361' });
        (useQuery as jest.Mock).mockReturnValue({
            character: characterMock.results[0]
        });

        const { result } = renderHook(() => useCharacter());

        expect(result.current.character).toEqual(characterMock.results[0]);
    });

    it('should return character source api when does not data source store', () => {
        (useParams as unknown as jest.Mock).mockReturnValue({ id: '54' });
        (useQuery as jest.Mock).mockImplementation(({ queryFn, onSuccess }) => {
            queryFn();
            onSuccess(characterMock.results[0]);

            return { data: characterMock.results[0] };
        });

        const { result } = renderHook(() => useCharacter());

        expect(mockGetCharacter).toHaveBeenCalled();
        expect(mockSetCharacters).toHaveBeenCalled();
        expect(result.current.character).toEqual(characterMock.results[0]);
    });

    it('should does not return character when id not exist', () => {
        (useParams as unknown as jest.Mock).mockReturnValue({ id: null });
        (useQuery as jest.Mock).mockImplementation(({ queryFn, onSuccess }) => {
            queryFn();
            onSuccess(null);

            return { data: null };
        });

        const { result } = renderHook(() => useCharacter());

        expect(result.current.character).toEqual(null);
    });
});
