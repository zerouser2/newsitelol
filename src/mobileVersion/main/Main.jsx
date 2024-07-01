import Favorites from "./favorites/Favorites";
import MobileBalance from "./MobileBalance";
import Orders from "./orders/Orders";
import styles from './mobBal.module.scss';
import WalletNotActive from "./balanceNotActive/WalletNotActive";
import Graph from "./graph/MobileGraph";
import Frens from "./frens/MobileFrens";
import Tasks from "./tasks/MobileTasks";

function Main() {
    return (  
        <div className={styles.main}>
            <MobileBalance />
            <WalletNotActive />
            <Graph />
            <Frens />
            <Tasks />
        </div>
    );
}

export default Main;