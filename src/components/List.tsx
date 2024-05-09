import Card from './Card';
import Styles from './List.module.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const List = () => (
    <ul className={Styles.list}>
        {items.map(item => (
            <Card
                key={item}
                name="Toxic Rick"
                status="Dead"
                species="Humanoid"
                type="Rick's Toxic Side"
                gender="Male"
                image="https://rickandmortyapi.com/api/character/avatar/368.jpeg"
            />
        ))}
    </ul>
);

export default List;
