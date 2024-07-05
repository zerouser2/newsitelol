import styles from './header.module.scss';
import bgImage from './images/bg.png';
import Images from './Images';
import Circle from './circles/Circle';
import Circle2 from './circles/Circle2';
import Button from './button/Button';
import lines from './images/lines.svg';
import { Link, Outlet } from 'react-router-dom';
import RouterPc from '../RouterPc';

function Onboarding() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.leftContainer}>
                    <div>
                        <div className={styles.circle}></div>
                        <Images />
                        <Circle />
                        <Circle2 />
                    </div>
                    <div className={styles.bigText}>
                        <div className={styles.big}>
                            <p>Trade</p>
                            <div>
                                <img src={lines} alt="Lines" />
                            </div>
                            <p>more efficient</p>
                        </div>
                        <div className={styles.smallText}>
                            <p>A binary options broker working with TON. Get up to <span>~98%</span> of the profit from the transaction</p>
                        </div>
                        <div className={styles.spans}>
                            <div className={styles.whitespan}></div>
                            <div className={styles.grayspan}></div>
                            <div className={styles.grayspan}></div>
                        </div>
                    </div>
                </div>
                <Button />
            </div>
        </>
    );
}

export default Onboarding;