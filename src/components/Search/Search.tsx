import useStore from '../../hooks/useStore';
import styles from './Search.module.css';

const Search = () => {
    const { setFilter } = useStore(state => state);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.search} data-testid="form">
            <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                data-testid="search"
                className={styles.input}
                onChange={handlerOnChange}
            />
        </form>
    );
};

export default Search;
