import styles from './circle.module.scss';

function Circle() {
    return (  
        <div className={styles.circles}>
            <div className={styles.whitecircle}></div>
            <div className={styles.whitecircle2}></div>
        </div>
    );
}

export default Circle;