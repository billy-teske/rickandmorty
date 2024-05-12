import styles from './Card.module.css';
import { Link } from 'react-router-dom';

interface IPropsCard {
    gender?: string;
    id: number;
    image: string;
    name: string;
    species?: string;
    status?: string;
    type: string;
}

const Card = ({
    gender,
    id,
    image,
    name,
    species,
    status,
    type,
}: IPropsCard) => (
    <li className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <figure className={styles.figure}>
            <img className={styles.img} src={image} alt="imagen" />
            <figcaption className={styles.figcaption}>
                <h2>{name}</h2>
                <p>{gender} {species} {status} {type}</p>
                <Link to={`./profile/${id}`} className={styles.button}>more info</Link>
            </figcaption>
        </figure>
    </li>
);

export default Card;
