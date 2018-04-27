import React from 'react';
import {Link} from 'react-router-dom';
import '../sendmoney/sendmoney.css';
import Header  from '../header/header';
const FinalScreen = (props)=>(
    <div className="row">
        <Header />
        <div className="contain">
            <h1>Send Money</h1>
            <p>You successfully transfer $1.00</p>

             <footer>
                <Link to={`/sendmoney`} className="btn btn-send">Send Money</Link>
                <Link to={`/transaction`} className="btn btn-back">Transaction History</Link>
            </footer>
        </div>
    </div>
)
export default FinalScreen