import styles from './Search.module.css';

const Search = () => {
    // const handleSubmit = () => {
    //     alert('submit');
    // };

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Buscar" aria-label="Buscar" className={styles.input} />
        </div>
    );
};

export default Search;
