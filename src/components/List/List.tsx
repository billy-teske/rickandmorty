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
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                type={character.type}
                gender={character.gender}
                image={character.image}
            />
        ))}
    </ul>
);

export default List;
