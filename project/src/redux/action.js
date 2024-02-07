
//הוספת משתמש
export function addUser(newUser){
    return { type:'ADD_USER',payLoad:newUser}
}

//קבלת כל המשתמשים
export function getUsersList(userList)
{
    return{type:'GET_USER_LIST',payLoad:userList}
}

//קבלת כל המשימות
export function getTaskList(taskList)
{
    return{type:'GET_TASK_LIST',payLoad:taskList}
}
//הוספת משימה
export function addTask(task){
    return{type:'ADD_TASK',payLoad:task}
}

//מחיקת משימה
export function deleteTask(taskId){
    return {type:'DELETE_TASK',payLoad:taskId}
}

//עדכון משימה
export function updateTask(taskId){
    return{type:'UPDATE_TASK',payLoad:taskId}
}

//הוספת סוג משימה
export function addTypeTask(typeTask){
    return{type:'ADD_TYPE_TASK',payLoad:typeTask}
}
