import styles from './button.module.scss';


function WhiteCircle() {
    return (
        <div className={styles.circles}>
            <div className={styles.whitecircle}></div>
            <div className={styles.whitecircle2}></div>

        </div>
    );
}

export default WhiteCircle;