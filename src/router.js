import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Order from './components/Order';
import OrderLanding from './components/OrderLanding'
import App from './App';
import Nav from './components/Nav';
const AppRouter = () => {
    return (
    <BrowserRouter>
        {/* <Link to="/order">Order Detail</Link> */}
        <Nav />
        <Switch>
            <Route exact path="/" component= {App} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/order/:id" component={OrderLanding} />
        </Switch>
    </BrowserRouter>
    );
}
 
export default AppRouter;