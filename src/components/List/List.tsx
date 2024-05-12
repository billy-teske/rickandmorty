import { TCharacter } from '../../api/getCharacter';
import useStore from '../../hooks/useStore';
import Card from '../Card/Card';
import styles from './List.module.css';

interface IPropsList {
    characters: TCharacter[];
}

const List = ({ characters }: IPropsList) => {
    const filter = useStore(state => state.filter);

    const items = characters.filter(
        item =>
            !filter?.length
            || item.name.toLowerCase().includes(filter.toLowerCase())
            || item.species.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={styles.list}>
            {items.map(character => (
                <Card
                    gender={character.gender}
                    id={character.id}
                    image={character.image}
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    status={character.status}
                    type={character.type}
                />
            ))}
        </ul>
    );
};

export default List;
