import Onboarding from "./components/header/Onboarding";
import Balance from "./components/main/balance/Balance";
import MobileFrens from "./mobileVersion/main/frens/MobileFrens";
import Frens from "./components/main/frens/token/Frens";

import Graph from "./components/main/graph/Graph";
import TradingViewWidget from "./components/main/graph/TradingViewWidget";
import Tasks from "./components/main/tasks/Tasks";
import Header from "./mobileVersion/header/Header";
import { useMediaQuery } from 'react-responsive';
import MobileBalance from "./mobileVersion/main/MobileBalance";
import Favorites from "./mobileVersion/main/favorites/Favorites";
import Main from "./mobileVersion/main/Main";
import Router from "./Router";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import WalletNotActive from "./mobileVersion/main/balanceNotActive/WalletNotActive";
import MixComponent from "./mobileVersion/MixComponent";
import MobileGraph from "./mobileVersion/main/graph/MobileGraph";
import MobileTasks from "./mobileVersion/main/tasks/MobileTasks";



const basename = '/newsitelol';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Router />}>
      <Route path="allcomponents" element={<MixComponent />} />
      <Route path="totalbalance" element={<MobileBalance />} />
      <Route path="header" element={<Header />} />
      <Route path="notactive" element={<WalletNotActive />} />
      <Route path="frens" element={<MobileFrens />} />
      <Route path="graph" element={<MobileGraph />} />
      <Route path="tasks" element={<MobileTasks />} />
    </Route>
),
  {basename: basename}
)

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 864px)' });

  return (
    <div className="App">
      {isMobile ?
        <>
          <RouterProvider router={router} />
        </>
        :
        <>
          <Onboarding />
          <Balance />
          <Frens />
          <Graph />
          <Tasks />
        </>
      }

    </div>
  );
}

export default App;
