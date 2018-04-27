import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TransListItem = ({ dispatch, t_date, t_name, t_money }) => (
    <tr>
        <td>{t_date}</td>
        <td>{t_name}</td>
        <td>{t_money}</td>
    </tr>
)
export default connect()(TransListItem);