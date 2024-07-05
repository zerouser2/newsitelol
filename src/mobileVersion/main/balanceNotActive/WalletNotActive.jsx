import styles from './wallet.module.scss';
import koshelekImg from '../../images/koshelek.svg';
import logo from '../../images/logo.png';
import deposit from '../../images/deposit.svg';
import withraw from '../../images/withraw.svg';
import Router from '../../../Router';
import fonWomen from '../../images/women.svg';
import MobileNavigation from '../../MobileNavigation';

function WalletNotActive() {
    return (
        <>
            <MobileNavigation />
            <div className={styles.walletnotactive}>
                {/* <div className={styles.vvv}></div>
                <div className={styles.fonWomen}></div> */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={styles.yellowContainer}>
                        <div className={styles.yellow}></div>
                    </div>

                    <div className={styles.koshelek}>
                        <img src={koshelekImg} />
                        <p>. . .</p>
                    </div>

                    <div className={styles.balance}>
                        <div className={styles.totalbaltext}>
                            <p>Total Balance</p>
                        </div>

                        <div className={styles.bigN}>
                            <img src={logo} />
                            <p className={styles.bigNum}>0</p>
                        </div>

                    </div>

                    <div className={styles.action}>
                        <a href='#' className={styles.deposit}>
                            <img src={deposit} />
                            <p>Deposit</p>
                        </a>
                        <a href='#' className={styles.withraw}>
                            <img src={withraw} />
                            <p>Withraw</p>
                        </a>
                    </div>
                </div>

                <div className={styles.connectButton}>
                    <a href='#'>
                        Connect wallet 💎
                    </a>
                </div>

            </div>
        </>
    );
}

export default WalletNotActive;