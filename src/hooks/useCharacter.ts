import { useQuery } from 'react-query';
import getCharacter from '../api/getCharacter';

const CHARACTERS_KEY = 'character-keys';

const useCharacter = () => {

    const { isFetching, data, error } = useQuery({
        queryKey: CHARACTERS_KEY,
        queryFn: getCharacter,
    });

    const characters = data?.results || [];

    return { isFetching, characters, error };
};

export default useCharacter;
