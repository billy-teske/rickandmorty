import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import getCharacter, { TCharacter } from '../api/getCharacter';
import useStore from './useStore';

const CHARACTER_KEY = 'character-keys';

const useCharacter = () => {
    const { id } = useParams();

    const { characterState, setCharacters } = useStore(state => ({
        characterState: state.characters.find(
            character => !!id && character.id === parseInt(id)
        ),
        setCharacters: state.setCharacters,
    }));

    const { data: characterQuery } = useQuery({
        queryKey: CHARACTER_KEY,
        queryFn: () => {
            if (!characterState) {
                return getCharacter({ id: parseInt(id || '0') || 0 });
            }
        },
        refetchOnWindowFocus: false,
        onSuccess: ((data: TCharacter | null) => setCharacters(data ? [data] : []))
    });

    return { character: characterState || characterQuery };
};

export default useCharacter;
