import { Link, Outlet } from 'react-router-dom';
import styles from './nav.module.scss';
import { useState } from 'react';

function Navigation() {
    const [isActive, setActive] = useState(false)

    return (
        <div className={styles.navig}>
            <div className={`${styles.userInfo} ${isActive ? styles.active : ''}`} onClick={() => setActive(!isActive)}>
                <div className={styles.text}>
                    <div>Имя пользователя</div>
                    <div>Пользователь</div>
                </div>
                <div className={styles.userAvatar}></div>
                <div className={styles.arrowdown}>
                    <span class="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </div>
            </div>

            <div className={`${styles.navs} ${isActive ? styles.active : ''}`}>
                <Link to='/totalbalance'>Баланс</Link>
                <Link to='/frens'>Френс</Link>
                <Link to='/graph'>График</Link>
                <Link to='/tasks'>Задания</Link>
            </div>
        </div>
    );
}

export default Navigation;