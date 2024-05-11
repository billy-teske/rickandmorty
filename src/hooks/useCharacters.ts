import { useQuery } from 'react-query';
import getCharacters from '../api/getCharacters';
import useStore from './useStore';

const CHARACTERS_KEY = 'character-keys';

const useCharacters = () => {
    const characters = useStore(state => state.characters);
    const setCharacters = useStore(state => state.setCharacters);

    const { isFetching, error } = useQuery({
        queryKey: CHARACTERS_KEY,
        queryFn: getCharacters,
        refetchOnWindowFocus: false,
        onSuccess: ((data) => setCharacters(data?.results || []))
    });

    return { isFetching, characters, error };
};

export default useCharacters;
