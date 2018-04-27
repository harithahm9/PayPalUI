const transDefaultState=[]
export default (state=transDefaultState, action)=>{
    switch(action.type){
        case 'GET_TRANS':
        return action.trans
        default: 
        return state
        
    }
}