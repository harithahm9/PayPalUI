import React from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../../actions/action';
import TransListItem from './TransListItem';
import Header from '../header/header';
import './transList.css';
class TransList extends React.Component {
    componentDidMount() {
        return this.props.fetchTransactions();
    }
    render() {
        const message = (<p>No Data Found </p>)
        return (
            <div className="container">
                        <Header />
                <h1 className="heading">Transaction List</h1>

                <table className="table table-striped table-hover">
                    <thead className="table_head">
                        <tr className="table_row">
                            <th>Date</th>
                            <th>Name</th>
                            <th>Transaction</th>
                        </tr>
                    </thead>
                    <tbody className="table_body">
                        {this.props.trans.length==0 ? message : this.props.trans.map((trans)=>{
                            return <TransListItem {...trans}/>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    console.log(state.trans);
    return {
        trans:(state.trans)
    }
}


export default connect(mapStateToProps,{fetchTransactions})(TransList)