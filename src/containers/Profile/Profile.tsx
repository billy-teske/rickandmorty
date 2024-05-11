import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import useStore from "../../hooks/useStore";
import styles from "./Profile.module.css";

const Profile = () => {
    const { id } = useParams();
    const character = useStore(state => state.characters.find(
        character => !!id && character.id === parseInt(id)
    ));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlerGoBack = () => {
        window.history.back();
    };

    if (!character) {
        return <span>no existe personaje</span>;
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
                <button onClick={handlerGoBack}>Go Back</button>
            </section>
        </article>
    );
};

export default Profile;
