import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import './mainscreen.css';




export default class Main extends Component {
    render(){
       
       return( 
        <main>
            <Header />
            <div className="fort-box">
                <center><h2>Pay for Bills and Goods.</h2></center>
                <center>
                <Link to="/sendmoney" className="btn btn-send">Send Money</Link>
                <Link to="/transaction" className="btn btn-transact">See Transaction</Link>
                </center>
            </div> 
        </main>
            )
        }


}