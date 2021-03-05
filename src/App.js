import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Router path='/review'>
            <Review></Review>
          </Router>
          <Router path='/inventory'>
            <Inventory></Inventory>
          </Router>
          <Router exact path='/'></Router>
          <Router path='*'>
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
