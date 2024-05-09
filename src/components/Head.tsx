import Search from './Search';
import styles from './Head.module.css';

const Head = () => (
    <>
        <h1 className={styles.h1}>Rick and Morty</h1>
        <Search />
    </>
);

export default Head;
