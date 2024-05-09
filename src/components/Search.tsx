import styles from './Search.module.css';

const Search = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('submit');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
            <input type="search" placeholder="Buscar" aria-label="Buscar" className={styles.input} />
        </form>
    );
};

export default Search;
