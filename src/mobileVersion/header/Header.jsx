import Images from '../../components/header/Images';
import TextAndImg from '../../components/header/textandimg/TextAndImg';
import styles from './header.module.scss';

import imgToken from '../../components/header/images/fonxz.svg'
import cardImage from '../../components/header/images/card.svg';
import coinsImage from '../../components/header/images/coins.svg';
import testWomen from '../../components/header/images/women.svg';
import blackFon from '../../components/header/images/black.svg';
import diamondImg from '../../components/header/images/diamond.svg';
import card from '../images/bigCard.svg'

import UnderHeader from './underHeader/UnderHeader';
import Circle from './decor/Circle';
import BigWhiteCircle from './decor/whitecircles/BigWhiteCircle';
import SmallWhiteCircle from './decor/whitecircles/SmallWhiteCircle';
import Router from '../../Router';

function Header() {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.circles}>
                    <BigWhiteCircle />
                    <SmallWhiteCircle />
                </div>
                <Circle />
                <div className={styles.topHeader}>
                    <div className={styles.cardBlock}>
                        <img src={card} className={styles.card} />
                    </div>
                </div>
                <div className={styles.circles2}>
                    <div className={styles.bigcircle}></div>
                    <div className={styles.smallcircle}></div>
                </div>

                <UnderHeader />
            </div>

        </>
    );
}

export default Header;