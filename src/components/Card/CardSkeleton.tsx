import styles from './CardSkeleton.module.css';
import listStyle from '../List/List.module.css';

const CardSkeleton = () => (
    <div className={listStyle.list}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div key={id} className={styles.skeleton} style={{
                animationDelay: `${id / 2}s`
            }}></div>
        ))}
    </div>
);

export default CardSkeleton;
