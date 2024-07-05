import styles from './orders.module.scss';
import arrowUp from '../images/arrowup.svg'
import arrowDown from '../images/arrowdown.svg'
import completed from '../images/completed.svg'
import nocompleted from '../images/nocompleted.svg'

function Orders() {
    return (
        <div className={styles.orders}>
            <div>
                <p style={{ fontWeight: '700', fontSize: '20px', lineHeight: '26px' }}>Orders</p>
            </div>

            <div className={styles.money}>
                <div className={styles.leftmoney}>
                    <div className={styles.order}>
                        <img src={nocompleted} />
                        <img src={arrowUp} />
                        <p>ETH/USDT</p>
                        <p><text style={{ fontWeight: '700' }}>$0.6643</text> on 15:13</p>
                    </div>
                    <div>
                        1H
                    </div>
                </div>

                <div className={styles.leftmoney}>
                    <div className={styles.order}>
                        <img src={completed} />
                        <img src={arrowDown} />
                        <p>ETH/USDT</p>
                        <p><text style={{ fontWeight: '700' }}>$0.6645</text> on 15:10</p>
                    </div>

                    <div>
                        3M
                    </div>
                </div>

                <div className={styles.leftmoney}>
                    <div className={styles.order}>
                        <img src={completed} />
                        <img src={arrowUp} />
                        <p>ETH/USDT</p>
                        <p><text style={{ fontWeight: '700' }}>$0.6639</text> on 15:09</p>
                    </div>
                    <div>
                        10M
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Orders;