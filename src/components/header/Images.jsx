import styles from './header.module.scss';
import cardImage from './images/card.svg';
import coinsImage from './images/coins.svg';
import testWomen from './images/women.svg';
import TextAndImg from './textandimg/TextAndImg';


function Images() {
    return (
        <div className={styles.images}>
            <img src={cardImage} className={styles.card} />
            <img src={testWomen} className={styles.women} />
            <TextAndImg />
            <img src={coinsImage} className={styles.coins} />
            <img src={coinsImage} className={styles.coins} />
        </div>
    );
}

export default Images;