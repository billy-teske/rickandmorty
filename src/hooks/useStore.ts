import { create } from 'zustand';
import { TCharacter } from '../api/getCharacter';

type TState = {
    characters: TCharacter[];
    setCharacters: (newItems: TCharacter[]) => void;
    page: number;
    nextPage: number;
    toPage: () => void;
    toNextPage: () => void;
};

const useStore = create<TState>((set) => ({
    characters: [],
    setCharacters: (newsCharacters) => set((state) => {
        const addedCharacters = newsCharacters.filter(
            (newCharacter) => !state.characters.find(
                character => newCharacter.id === character.id
            )
        );

        return {
            characters: [...state.characters, ...addedCharacters],
        };
    }),
    page: 0,
    toPage: () => set((state) => ({ page: state.nextPage })),
    nextPage: 1,
    toNextPage: () => set((state) => ({ nextPage: state.page + 1 })),
}));

export default useStore;
