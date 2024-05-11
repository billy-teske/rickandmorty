import List from '../../components/List/List';
import CardSkeleton from '../../components/Card/CardSkeleton';
import useCharacter from '../../hooks/useCharacters';

const Home = () => {
    const { isFetching, characters, error } = useCharacter();

    if (isFetching) {
        return <CardSkeleton />;
    }

    if (error) {
        return <span>error</span>;
    }

    return <List characters={characters} />;
};

export default Home;