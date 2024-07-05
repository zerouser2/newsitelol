import { useState } from 'react';
import styles from './router.module.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import iconButton from './mobileVersion/images/iconbutton.svg'

function Router() {
    const [isActive, setActive] = useState(false)

    return (
        <>
            <div className={styles.burgerMenu}>
                <img src={iconButton} onClick={() => setActive(!isActive)}/>
            </div>
            <div className={`${styles.navigation} ${isActive ? styles.active : ''}`}>
                <span className={`material-symbols-outlined ${styles.cancel}`} onClick={() => setActive(false)}>
                    cancel
                </span>
                <div className={styles.navs}>
                    <p><span>N</span>AVIGATION</p>
                    <ul>
                        <li>
                            <Link to='/'>Хедер</Link>
                        </li>
                        <li>
                            <Link to='/totalbalance'>Баланс</Link>
                        </li>
                        <li>
                            <Link to='/notactive'>Не подключенный кошелек</Link>
                        </li>
                        <li>
                            <Link to='/graph'>График</Link>

                        </li>
                        <li>
                            <Link to='/frens'>Френс</Link>

                        </li>
                        <li>
                            <Link to='/tasks'>Задачи</Link>

                        </li>

                    </ul>
                </div>
            </div>

        </>
    );
}

export default Router;