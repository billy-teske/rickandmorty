import styles from './CardSkeleton.module.css';
import listStyle from '../List/List.module.css';

const CardSkeleton = () => (
    <div className={listStyle.list}>
        {Array.from({ length: 20 }, (_, id) => (
            <div key={id} className={styles.skeleton} style={{
                animationDelay: `${id / 10}s`
            }}></div>
        ))}
    </div>
);

export default CardSkeleton;
