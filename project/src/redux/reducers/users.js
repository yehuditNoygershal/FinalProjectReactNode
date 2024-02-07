import {produce} from 'immer';

const initialState={
    usersList: [
    
    ],
    usersCount: 4
};

export default produce((state,action)=>{
    switch(action.type){
        case 'ADD_USER':
            {state.usersList.push(action.payLoad)}
            break;
        case 'GET_USER_LIST':
            {state.usersList=action.payLoad}
            break;
    }
},initialState);