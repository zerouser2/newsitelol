import styles from './walletnotactive.module.scss';
import logo from './images/logo.png';
import deposit from './images/deposit.svg';
import withraw from './images/withraw.svg';
import koshelek from './images/koshelek.svg';
import RouterPc from '../../RouterPc';
import Navigation from '../../Navigation';

function WalletNotActivePc() {
    return (
        <>
            {/* <RouterPc /> */}
            <Navigation />
            <div className={styles.notActiveContainer}>
                <div className={styles.orange}></div>

                <div className={styles.walletinfo}>
                    <img src={koshelek} />
                    <p>. . .</p>
                </div>

                <div className={styles.balText}>Total balance</div>

                <div className={styles.balance}>
                    <img src={logo} />
                    <p>0</p>
                </div>

                <div className={styles.buttons}>
                    <a>
                        <img src={deposit} />
                        <p>Deposit</p>
                    </a>
                    <a>
                        <img src={withraw} />
                        <p>Withraw</p>
                    </a>
                </div>

                <div className={styles.redcircle}></div>
            </div>

        </>
    );
}

export default WalletNotActivePc;