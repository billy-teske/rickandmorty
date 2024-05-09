import { useEffect, useState } from 'react';
import styles from './CardSkeleton.module.css';
import listStyle from './List.module.css';

const CardSkeleton = () => {
    const [arrayCount, setArrayCount] = useState([0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setArrayCount((prevCount) => [prevCount.length, ...prevCount]);
        }, 700);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={listStyle.list}>
            {arrayCount.map((id) => (
                <div key={id} className={styles.skeleton}></div>
            ))}
        </div>
    );
};

export default CardSkeleton;
