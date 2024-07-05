import Navigation from '../../../Navigation';
import RouterPc from '../../../RouterPc';
import OrangeCircle from '../../circles/OrangeCircle';
import RedCircle from '../../circles/RedCircle';
import FrenQuantity from '../frenquantity/FrenQuantity';
import Light from '../light/Light';
import EarnTokens from './EarnTokens';
import styles from './token.module.scss'


function Frens() {
    return (
        <>
            <Navigation />
            <div className={styles.container}>
                <OrangeCircle />
                <EarnTokens />
                <FrenQuantity />
                <Light />
                <RedCircle />
            </div>

        </>
    );
}

export default Frens;