import styles from './favorites.module.scss';
import notcoin from '../images/notcoin.svg';
import usdt from '../images/usdt.svg'
import dogecoin from '../images/dogecoin.svg'
import notcoinGraph from '../images/notcoinGraph.svg'
import usdtGraph from '../images/usdtGraph.svg'
import dogecoinGraph from '../images/dogecoinGraph.svg'

function Favorites() {
    return (
        <div className={styles.favorites}>
            <div className={styles.favText}>
                <p>Favorites</p>
            </div>

            <div className={styles.valuta}>
                <div className={styles.notcoin}>
                    <div className={styles.leftval}>
                        <img src={notcoin} />
                        <div>
                            <p>NOT/USDT</p>
                            <p style={{ fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color: '#FFFFFF99' }}>Notcoin</p>
                        </div>
                    </div>

                        <img src={notcoinGraph} className={styles.graph} />
                    <div>
                        <p  className={styles.cost}>$0.09</p>
                        <p style={{ color: '#02C173', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px' }}>10.23%</p>
                    </div>
                </div>

                <div className={styles.usdt}>
                    <div className={styles.leftval}>
                        <img src={usdt} />
                        <div>
                            <p >TON/USDT</p>
                            <p style={{ fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color: '#FFFFFF99' }}>The Open N...</p>
                        </div>

                    </div>

                        <img src={usdtGraph}  className={styles.graph}/>
                    <div>
                        <p className={styles.cost}>$10.9</p>
                        <p style={{ color: '#02C173', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px' }}>1.13%</p>
                    </div>
                </div>

                <div className={styles.dogecoin}>
                    <div className={styles.leftval}>
                        <img src={dogecoin} />
                        <div>
                            <p>DOGE/BTC</p>
                            <p style={{ fontSize: '14px', lineHeight: '18.2px', fontWeight: '400', color: '#FFFFFF99' }}>Dogecoin</p>
                        </div>

                    </div>

                        <img src={dogecoinGraph}  className={styles.graph}/>
                    <div style={{ marginLeft: '5px' }}>
                        <p className={styles.cost}>$0.100</p>
                        <p style={{ color: '#E11A38', fontWeight: '400', fontSize: '14px', lineHeight: '18.2px' }}>0.89%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favorites;