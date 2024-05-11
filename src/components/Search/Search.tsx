import useStore from '../../hooks/useStore';
import styles from './Search.module.css';

const Search = () => {
    const { page, nextPage } = useStore(state => state);
    // const handleSubmit = () => {
    //     alert('submit');
    // };

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Buscar" aria-label="Buscar" className={styles.input} />
            <span>{page} - {nextPage}</span>
        </div>
    );
};

export default Search;
