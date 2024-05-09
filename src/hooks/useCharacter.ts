import { useQuery } from 'react-query';
import getCharacter from '../api/getCharacter';

const CHARACTERS_KEY = 'character-keys';

interface IPropsUseCharacters {
    page: number;
}

const useCharacter = ({ page }: IPropsUseCharacters) => {
    const { isFetching, data, error } = useQuery({
        queryKey: CHARACTERS_KEY,
        queryFn: () => getCharacter({ page }),
    });

    return { isFetching, data, error };
};

export default useCharacter;
