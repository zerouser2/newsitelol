import styles from './nav.module.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';

function RouterPc() {
    return (
        <>
            <div className={styles.navigation}>
                <Link to='/'>Главная</Link>
                <Link to='/notactive'>Не подключенный кошелек</Link>
                <Link to='/totalbalance'>Баланс</Link>
                <Link to='/frens'>Френс</Link>
                <Link to='/graph'>График</Link>
                <Link to='/tasks'>Задания</Link>
            </div>
        </>
    );
}

export default RouterPc;