import List from '../../components/List/List';
import CardSkeleton from '../../components/Card/CardSkeleton';
import useCharacter from '../../hooks/useCharacter';
import styles from './Home.module.css';

const Home = () => {
    const { isFetching, characters, error, seeMore } = useCharacter();

    return (
        <>
            {!!characters.length && <List characters={characters} />}
            {isFetching ? <CardSkeleton /> : <button onClick={seeMore} className={styles.button}>See More</button>}
            {error && <em>error</em>}
        </>
    );
};

export default Home;