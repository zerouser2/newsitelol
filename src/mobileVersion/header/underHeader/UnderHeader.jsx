import styles from './underheader.module.scss';
import line from '../images/lines.svg';
import Button from './Button';

function UnderHeader() {
    return (
        <div className={styles.underContainer}>
            <div className={styles.title}>
                <p>Trade</p>
                <div className={styles.lines}>
                    <img src={line} className={styles.line}></img>
                </div>
                <p>more efficient</p>
            </div>
            <div className={styles.desc}>
                <p>A binary options broker working with TON. Get
                    up to <text>~98%</text> of the profit from the transaction,
                    which can be completed in just <text>3 minutes</text>
                </p>
            </div>

            <div>
                <div className={styles.spans}>
                    <div className={styles.whitespan}></div>
                    <div className={styles.grayspan}></div>
                    <div className={styles.grayspan}></div>
                </div>
            </div>
            <div className={styles.whitecircles}>
                <div className={styles.white1}></div>
                <div className={styles.white2}></div>
                <div className={styles.redcircle}></div>
            </div>
            <Button />
        </div>
    );
}

export default UnderHeader;