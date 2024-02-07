import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/action";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";


function mapStateToProps(state){
    return{
        taskType:state.task.taskType
    };
}

export default connect(mapStateToProps)(function AddTask(props){
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const {taskType,dispatch,idUser,name}=props;
    // { taskId: '1', taskTypeId: '1', taskName: 'דוח תלמידים', contactTaskID: '123456789', contactTaskName: 'שרה לוי',isReady:false },
    let taskIdRef=useRef('');
    let taskTypeIdRef=useRef('');
    let taskNameRef=useRef('');


    const addUser=async()=>{
      try{
        var number = parseInt(idUser);

debugger
          const newTask={
            taskId:taskIdRef.current.value,
            taskTypeId:0,
            taskName:taskNameRef.current.value,
            contactTaskID:idUser,
            contactTaskName:name,
            isReady:false
          };
          console.log(idUser,"iduser");
          const response=await axios.post('http://localhost:5000/task/',newTask)
           console.log(response.data);
           dispatch(addTask(response.data))
           alert(`המשימה ${name} נוספה בהצלחה`)
      }
      catch(error){
          console.error(error);
      }
  };


    return(
        <>
        <h1>הכנסת פרטי המשימה:</h1>
            <br></br>
            <br></br>
            <TextField inputRef={taskNameRef} id="outlined-basic" label="שם המשימה" variant="outlined" />
            <br></br>
            <br></br>
            {/* <TextField inputRef={taskIdRef} id="outlined-basic" label="מספר מזהה למשימה" variant="outlined" />
            {
                taskType.map(element=>(
                    <li>{element.taskTypeName&&<br></br>&&element.taskTypeId}</li>
                ))
            } */}
            {/* <br></br>
            <br></br> */}
            <TextField inputRef={taskIdRef} id="outlined-basic" label="מספר המשימה" variant="outlined" />
            <br></br>
            <br></br>
            
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">סוג משימה</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value={10}>משימה</MenuItem>
          <MenuItem value={20}>באג</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <Button type="submit" onClick={addUser} variant="outlined">לאשור</Button>
       </>
    )

})