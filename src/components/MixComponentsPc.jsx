import { Link, Outlet } from "react-router-dom";
import Onboarding from "./header/Onboarding";
import Balance from "./main/balance/Balance";
import Frens from "./main/frens/token/Frens";
import Graph from "./main/graph/Graph";
import Tasks from "./main/tasks/Tasks";
import styles from './header/header.module.scss';

function MixComponentPc() {
    return (
        <>
            <div className={styles.content}>
                <Onboarding />
                <Balance />
                <Frens />
                <Graph />
                <Tasks />
            </div>

        </>
    );
}

export default MixComponentPc;