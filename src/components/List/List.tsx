import { TCharacter } from '../../api/getCharacter';
import Card from '../Card/Card';
import styles from './List.module.css';

interface IPropsList {
    characters: TCharacter[];
}

const List = ({ characters }: IPropsList) => (
    <ul className={styles.list}>
        {characters.map(character => (
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

export default List;
