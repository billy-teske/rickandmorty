import { create } from 'zustand';
import { TCharacter } from '../api/getCharacters';

type TState = {
    characters: TCharacter[];
    setCharacters: (newItems: TCharacter[]) => void;
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
}));

export default useStore;
