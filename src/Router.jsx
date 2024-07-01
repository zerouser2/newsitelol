import styles from './router.module.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Router() {
    return (
        <div className={styles.navigation}>
            <div className={styles.navs}>
                <Link to='/allcomponents'>Все компоненты</Link>
                <Link to='/header'>Хедер</Link>
                <Link to='/totalbalance'>Баланс</Link>
                <Link to='/notactive'>Не подключенный кошелек</Link>
                <Link to='/graph'>График</Link>
                <Link to='/frens'>Френс</Link>
                <Link to='/tasks'>Задачи</Link>
            </div>


            <Outlet />
        </div>
    );
}

export default Router;