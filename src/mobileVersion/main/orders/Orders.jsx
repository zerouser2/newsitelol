import styles from './orders.module.scss';
import nocompleted from '../../images/nocompleted.svg';
import completed from '../../images/completed.svg';
import arrowUp from '../../images/arrowup.svg';
import arrowDown from '../../images/arrowdown.svg';

function Orders() {
    return (  
        <div className={styles.orders}>
            <div>
                <p className={styles.orderText} style={{fontWeight: '700', fontSize: '20px', lineHeight: '26px'}}>Orders</p>
            </div>

            <div className={styles.money}>
                <div className={styles.order}>
                    <img src={nocompleted} />
                    <img src={arrowUp} />
                    <p style={{fontSize: '12px'}}>ETH/USDT</p>
                    <p style={{fontSize: '12px'}}><text style={{fontWeight: '700', fontSize: '12px'}}>$0.6643</text> on 15:13</p>
                    <div>
                        1H
                    </div>
                </div>

                <div className={styles.order}>
                    <img src={completed} />
                    <img src={arrowDown} />
                    <p style={{fontSize: '12px'}}>ETH/USDT</p>
                    <p style={{fontSize: '12px'}}><text style={{fontWeight: '700',fontSize: '12px'}}>$0.6645</text> on 15:10</p>
                    <div style={{paddingLeft: '10px'}}>
                        3M
                    </div>
                </div>

                <div className={styles.order}>
                    <img src={completed} />
                    <img src={arrowUp} />
                    <p style={{fontSize: '12px'}}>ETH/USDT</p>
                    <p style={{fontSize: '12px'}}><text style={{fontWeight: '700', fontSize: '12px'}}>$0.6639</text> on 15:09</p>
                    <div>
                        10M
                    </div>
                </div>
            </div>
             
        </div>
    );
}

export default Orders;