import { act, renderHook } from "@testing-library/react";
import useStore, { TState } from "./useStore";
import characterMock from "../api/__mock__/characterMock";

type TFnSet = (setState: (newState: TState) => void) => () => void;

const mockSet = jest.fn();
jest.mock('zustand', () => ({
    create: (fn: TFnSet) => () => fn(mockSet),
}));

describe('useStore Hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return characters', () => {
        const { result } = renderHook(() => useStore(store => store));

        expect(result.current.characters).toEqual([]);
        expect(result.current.page).toEqual(0);
        expect(result.current.nextPage).toEqual(1);
    });

    it('should read set function when set characters', () => {
        mockSet.mockImplementation((fn) => {
            fn({ characters: characterMock.results });
        });

        const { result } = renderHook(() => useStore(store => store));

        act(() => {
            result.current.setCharacters(characterMock.results);
        });

        expect(mockSet).toHaveBeenCalled();
    });

    it('should read set function shen increment page', () => {
        mockSet.mockImplementation((fn) => {
            fn({ page: 0 });
        });

        const { result } = renderHook(() => useStore(store => store));

        act(() => {
            result.current.toPage();
        });

        expect(mockSet).toHaveBeenCalled();
    });

    it('should read set function shen increment nextPage', () => {
        mockSet.mockImplementation((fn) => {
            fn({ nextPage: 1 });
        });

        const { result } = renderHook(() => useStore(store => store));

        act(() => {
            result.current.toNextPage();
        });

        expect(mockSet).toHaveBeenCalled();
    });

    it('should read set function shen change the filter', () => {
        mockSet.mockImplementation((fn) => {
            fn({ filter: 'a' });
        });

        const { result } = renderHook(() => useStore(store => store));

        act(() => {
            result.current.setFilter('a');
        });

        expect(mockSet).toHaveBeenCalled();
    });
});
