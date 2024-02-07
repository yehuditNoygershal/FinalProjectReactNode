import React,{useEffect,useState,state} from "react";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import { updateTask } from "../redux/action";
import axios from "axios";
import {deleteTask} from "../redux/action";
// import { log } from "console";

function mapStateToProps(state){
    return {
        taskList:state.task.taskList
    }
}

export default connect(mapStateToProps)(function ShowTask(props){

    const {taskList,task,dispatch}=props;

    const [ind,setInd]=useState(0);
    

    const updateTask2 = async () => {
     
        try{ 
            const updateTask1={
                taskId:task.taskId,
                isReady:true
            }
            const response=await axios.put(`http://localhost:5000/task/${task.taskId}`,updateTask1)
            console.log(response.data);
            dispatch(updateTask(task.taskId));
        }
        catch(error){
            console.log(error);
        }
    }

    const deleteTask1 = async () => {
        try{ 
            console.log('pppppppppp');
            const response=await axios.delete(`http://localhost:5000/task/${task.taskId}`)
            console.log(response.data,"task");
            dispatch(deleteTask(task.taskId));

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(
        function saveIndex(){
            setInd(taskList.findIndex(x=>x.taskId===task.taskId));
    },[])


    return(
        <>          
            <div>
            <span> מס' משימה{taskList[ind].taskId}</span>
            <br></br>
            <span> מס' סוג משימה{taskList[ind].taskTypeId}</span>
            <br></br>
            <span> שם משימה {taskList[ind].taskName}</span>
            <br></br>
            <span> מס' בעל המשימה {taskList[ind].contactTaskID}</span>
            <br></br>
            <span>  שם בעל המשימה {taskList[ind].contactTaskName}</span>
            <br></br>
            <span>  הפעולה בוצעה: {taskList[ind].isReady}</span>
            <Button  onClick={updateTask2} variant="outlined">לעדכון המשימה</Button>
            <Button  onClick={deleteTask1} variant="outlined">למחיקת המשימה</Button>
            <br></br>
            </div>
        </>
    )
})