import styles from './balance.module.scss';
import fileImg from './images/file.png'
import peopleImg from './images/people.png'

function Activities() {
    return (
        <div className={styles.activities}>

            <div className={styles.activityContainer}>
                <div>Activities</div>
                <div className={styles.mix}>
                    <div className={styles.reward}>
                        <div className={styles.rewarding}>Rewarding</div>
                        <div className={styles.time}>15m</div>
                    </div>

                    <div className={styles.navs}>
                        <a href='#' className={styles.nav}>
                            <div>
                                <img src={fileImg} />
                                <p>Tasks</p>
                            </div>
                        </a>
                        <a href='#' className={styles.nav}>
                            <div>
                                <img src={peopleImg} />
                                <p>Frens</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.tradingButton}>
                <a>Trading platform 🦄 </a>
            </div>
        </div>
    );
}

export default Activities;