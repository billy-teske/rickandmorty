import { useQuery } from 'react-query';
import getCharacters from '../api/getCharacter';
import useStore from './useStore';
import { useEffect } from 'react';

const CHARACTERS_KEY = 'character-keys';

const useCharacters = () => {
    const { characters, setCharacters, page, toPage, nextPage, toNextPage } = useStore(state => state);
    const { isFetching, error, refetch } = useQuery({
        queryKey: CHARACTERS_KEY,
        queryFn: () => {
            if (page !== nextPage) {
                return getCharacters({ page: nextPage });
            }
        },
        refetchOnWindowFocus: false,
        onSuccess: ((data) => {
            setCharacters(data?.results || []);
            toPage();
        })
    });

    useEffect(() => {
        if (page !== nextPage) {
            refetch();
        }
    }, [page, nextPage, refetch]);

    return { isFetching, characters, error, seeMore: toNextPage };
};

export default useCharacters;
