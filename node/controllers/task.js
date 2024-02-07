const taskType=[
    {taskTypeId:'1',taskTypeName:"משימה"},
    {taskTypeId:'2',taskTypeName:"באג"},
]

const taskList=[
    {taskId:'1',taskTypeId:'1',taskName:'דוח תלמידים',contactTaskId:'123456789',contactTaskName:'שרה לוי',isReady:'false'},
    {taskId:'2',taskTypeId:'2',taskName:'לא מעדכן שהמוצר נגמר במלאי',contactTaskId:'111456789',contactTaskName:'יעקב הלל',isReady:'false'},
    {taskId:'1',taskTypeId:'1',taskName:'דוח מורים',contactTaskId:'123456789',contactTaskName:'שרה כהן',isReady:'false'},
]

// //הצגת כל המשימות
// exports.getAllTask=(req,res)=>{
//     res.send(taskList)
// }

// // מחיקת רשימה לפי ID 
// exports.removeTask=(req,res)=>{
//     const id=req.params.id
//     const index=taskList.findIndex(x=>x.id===id)
//     taskList.splice(index,1)
//     res.send(taskList)
// }

// //עדכון משימה לפי ID
// exports.UpdateTask=(req,res)=>{
//     const id=req.params.id
//     const index=taskList.findIndex(x=>x.id===id)
//     if(index!==-1)
//         taskList[index].isReady=true
// }

///מכאן מעודכן


const Task = require('../models/task')

//הוספת משימה
exports.addTask = async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const task = await Task.create(req.body);
    res.json(task)    
}

//מחיקת משימה
exports.deleteTask = async (req, res) => {
    const  taskId  = req.params.taskId;
  console.log(taskId);
    try {
      const deletedTask = await Task.findOneAndDelete({ taskId: taskId });
      if (!deletedTask) {
        return res.status(404).json({ message: 'task not found' });
      }
      res.json({ message: 'task deleted successfully' });
    } catch (error) {
      console.error('Failed to delete task:', error);
      res.status(500).json({ message: 'Failed to delete task' });
    }
  };

  // //הצגת כל המשימות
  exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      console.log(tasks);
      console.log("tasks");
      res.json(tasks);
      // console.error('Failed to get task:', error);
    } catch (error) {
      res.status(500).json({ message: 'Failed to get task' });
    }
  };

  //עדכון משימה
  exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
  
    try {
      const updateTask = await Task.findOneAndUpdate(
        { taskId:taskId },
       { isReady: true} // עדכון השדה האם המשימה בוצעה
      );
  
      if (!updateTask) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updateTask);
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  };

  //מחיקת משימה
  exports.deleteTask = async (req, res) => {
    const  taskId  = req.params.taskId;
  console.log(taskId);
    try {
      const deletedTask = await Task.findOneAndDelete({ taskId: taskId });
      if (!deletedTask) {
        return res.status(504).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  };
