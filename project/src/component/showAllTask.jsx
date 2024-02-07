import React,{useEffect, useState,state}  from "react";
import { connect } from "react-redux";
import AddTask from "./addTask";
import ShowTask from "./showTask";
// import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link, useLocation} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import { getTaskList } from "../redux/action";

function mapStateToProps(state){
    return{
        taskList:state.task.taskList
    }
}

export default connect(mapStateToProps)(function ShowAllTask(props){
 
        const {taskList,dispatch}=props;
        const location=useLocation();
        const idUser=location?.state?.idUser;
console.log(idUser);
        const [ind,setInd]=useState(0);
        const [AddTaskFlag,setAddTaskFlag]=useState(false);
        const [CurrentTask,setCurrentTask]=useState(0);
        const [list, setlist]=useState([]);
        // const[flag, setflag]=useState(false);
        // useEffect(()=>{
        //     console.log(taskList,"t");
        // },[,taskList])

       
        
        const getAllTask=async()=>{
            try{
              
                const response=await axios.get('http://localhost:5000/task/')
                console.log("tamar",response.data);
                if(response.status==200)
                {
                    console.log("getUsersList");
                    dispatch(getTaskList(response.data))
                }
            }
            catch(error){
                console.log(error);
            }
        }

        useEffect(
            function saveIndex(){
                setInd(taskList.findIndex(x=>x.contactTaskID===idUser));
                getAllTask();
        },[])

    //  useEffect(()=>
    //  {
    //     var x=taskList.map(element=>(element.contactTaskID==idUser))
    //     console.log(x);
    //     setlist(taskList.map(element=>(element.contactTaskID==idUser)));

    //  },[,taskList])
        return(
            <>
                <h1>:רשימת המשימות שלך</h1>
                {
                    taskList.map(element=>(
                        element.contactTaskID==idUser&&<li>{element.taskName}
                        <Button variant="outlined" onClick={()=>setCurrentTask(element.taskId)} >להצגת המשימה</Button>
                        {CurrentTask===element.taskId&&<ShowTask task={element}></ShowTask>}                      
                        </li>
                    ))                  
                }
                {/* {
                    // list.map(element => { 
                    //     <li>{element.taskName}
                    //     <Button variant="outlined" onClick={()=>setCurrentTask(element.taskId)} >להצגת המשימה</Button>
                    //     {CurrentTask===element.taskId&&<ShowTask task={element}></ShowTask>}
                    //       </li>
                    // });
                    list.map((element)=>{
                        return(
                            <>
                            {element.taskName}
                            <Button variant="outlined" onClick={()=>setCurrentTask(element?.taskId)} >להצגת המשימה</Button>
                             {CurrentTask===element.taskId&&<ShowTask task={element}></ShowTask>}
                            </>
                        )
                    })
                } */}
{/* 
                { taskList.map((element)=>{
                    return(
                        <><Button variant="outlined" href="#outlined-buttons" onClick={()=>setCurrentTask(element.contactTaskID)} >להצגת המשימה</Button></>
                    )
                })

                } */}
                <br></br>
                <Button variant="outlined" onClick={()=>setAddTaskFlag(true)}>להוספת משימה</Button>
                {AddTaskFlag&&<AddTask idUser={idUser}/>}
                {/* onClick=AddTask idUser={idUser} name={taskList[ind].contactTaskName */}
                {/* <button onClick={<AddTask idUser={idUser} name={taskList[ind].contactTaskName} ></AddTask>}> להוספת משימה</button> */}
            </>
        )
    }
)