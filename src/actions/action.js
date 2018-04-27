export const getTransactions=(trans)=>{
    return {
        type:'GET_TRANS',
        trans
    }
}

export const fetchTransactions=()=>{
    return dispatch=>{
      return fetch('http://localhost:3000/transactions/getAll').
        then(res=>res.json()).
        then(data=>{dispatch(getTransactions(data.trans))})
    }
}