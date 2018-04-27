import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import TransDashboard from '../components/transactions/dashboard';
import Header from '../components/transactions/header';
import FinalScreen from '../components/transactions/finalScreen';
import Main from '../components/mainscreen/mainscreen';
import Sendmoney from '../components/sendmoney/sendmoney';

const AppRouter = () => (
    <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/sendmoney" component={Sendmoney} />
                <Route path="/final" component={FinalScreen} />
                <Route path="/transaction" component={TransDashboard} />
            </Switch>
    </BrowserRouter>
)

export default AppRouter