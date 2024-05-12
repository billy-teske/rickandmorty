import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import styles from './Profile.module.css';

const Profile = () => {
    const { id } = useParams();
    const character = useStore(state => state.characters.find(
        character => !!id && character.id === parseInt(id)
    ));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!character) {
        return (
            <article className={styles.content}>
                <section>
                    <div className={styles.img}></div>
                    <div className={styles.h2}></div>
                    <div className={styles.ul}>
                        <div className={styles.li}></div>
                        <div className={styles.li}></div>
                        <div className={styles.li}></div>
                        <div className={styles.li}></div>
                    </div>
                    <Link to="/" className={styles.button}>Go Back</Link>
                </section>
            </article>
        );
    }

    const {
        name,
        status,
        species,
        type,
        gender,
        // origin,
        // location,
        image,
        // episode,
    } = character;

    return (
        <article className={styles.content} style={{ backgroundImage: `url(${image})` }}>
            <section>
                <img src={image} alt={`image ${name}`} />
                <h2>{name}</h2>
                <ul>
                    <li>Type {type}</li>
                    <li>Species {species}</li>
                    <li>Gender {gender}</li>
                    <li>Status {status}</li>
                </ul>
                <Link to="/" className={styles.button}>Go Back</Link>
            </section>
        </article>
    );
};

export default Profile;
