import List from '../../components/List/List';
import Search from '../../components/Search/Search';
import CardSkeleton from '../../components/Card/CardSkeleton';
import useCharacters from '../../hooks/useCharacters';
import styles from './Home.module.css';

const Home = () => {
    const { isFetching, characters, error, seeMore } = useCharacters();

    return (
        <>
            <Search />
            {!!characters.length && <List characters={characters} />}
            {isFetching ? <CardSkeleton /> : <button onClick={seeMore} className={styles.button}>See More</button>}
            {error && <em>error</em>}
        </>
    );
};

export default Home;