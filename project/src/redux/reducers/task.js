import {produce} from 'immer';

const initialState={
    taskType: [    
    ],

    taskList: [ 
    ]
};

export default produce((state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            {state.taskList.push(action.payLoad)};
            break;
        case 'DELETE_TASK':
            {
                const ind =state.taskList.findIndex(x=>x.taskId==action.payLoad)
                state.taskList.splice(ind ,1);
            }
            break;
        case 'UPDATE_TASK':
            { state.taskList=state.taskList.find(x=>x.taskId==action.payLoad).isReady=true;}
            break;
        case 'ADD_TYPE_TASK':
            {state.taskType.push(action.payLoad)}
            break;
        case 'GET_TASK_LIST':
            {state.taskList=action.payLoad}
            break;
    }
},initialState)

