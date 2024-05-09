import styles from './Card.module.css';

interface IPropsCard {
    gender?: string;
    image: string;
    name: string;
    species?: string;
    status?: string;
    type: string;
}

const Card = ({
    gender,
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
                <h2 className={styles.h2}>{name}</h2>
                <span>{gender} {species}</span>
                <span>{status}</span>
                <span>{type}</span>
                <button className={styles.button}>ver más</button>
            </figcaption>
        </figure>
    </li>
);

export default Card;
