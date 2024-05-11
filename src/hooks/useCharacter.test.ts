import { renderHook } from '@testing-library/react';
import * as ReactQuery from 'react-query';
import useCharacter from './useCharacter';
import characterMock from '../api/__mock__/characterMock';

const mockReactQuery = jest.spyOn(ReactQuery, 'useQuery');

describe('useCharacter hook', () => {
    it('should return isFetching', () => {
        mockReactQuery.mockImplementation(
            jest.fn().mockReturnValue({
                isFetching: true,
            })
        );

        const { result } = renderHook(() => useCharacter());

        expect(result.current.isFetching).toBeTruthy();
    });

    it('should return error', () => {
        mockReactQuery.mockImplementation(
            jest.fn().mockReturnValue({
                error: true,
            })
        );

        const { result } = renderHook(() => useCharacter());

        expect(result.current.error).toBeTruthy();
    });

    it('should return characters', () => {
        mockReactQuery.mockImplementation(
            jest.fn().mockReturnValue({
                data: characterMock,
            })
        );

        const { result } = renderHook(() => useCharacter());

        expect(result.current.characters).toEqual(characterMock.results);
    });
});
