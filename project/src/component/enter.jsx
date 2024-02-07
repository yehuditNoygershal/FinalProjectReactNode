import React, {  useRef, useState ,useEffect} from "react";
import { connect } from "react-redux";
import Login from "./login";
import ShowAllTask from "./showAllTask";
import {  Navigate, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {getUsersList} from '../redux/action';


//מייבאת את רשימת המשתמשים
function mapStateToProps(state){
    return{
        usersList:state.users.usersList
    };
}

export default connect(mapStateToProps)(function Enter(props){

    const {usersList,dispatch}=props;
    let firstNameRef=useRef('');
    // let lastNameRef=useRef('');
    let idUserRef=useRef('');
    const [flag,setFlag]=useState(0);

    const navigate= useNavigate();
    


    function searchByID(){
        console.log(usersList);
        const index=usersList.find(x=>x.idUser==idUserRef.current.value)
        console.log(index);
        if(index!=null){
            return navigate('/showAllTask', { state: {idUser:idUserRef.current.value} });  
            console.log(idUserRef.current.value,"id");
        }
        else{
            // console.log(idUserRef);
            return navigate('/login');
        }        
    }

    const getAllUsers=async()=>{
        try{
            // console.log("hngnhjhhghhhhghg");
            const response=await axios.get('http://localhost:5000/users/')
            console.log("tamar",response.data);
            if(response.status==200)
            {
                console.log("getUsersList");

                dispatch(getUsersList(response.data))
            }
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllUsers();
    },[])

  

    
    
    return(
        <>
        <form>
        <div id="div3">
        <br></br> 
        <br></br> 
        <br></br>
        
        <TextField inputRef={firstNameRef} id="outlined-basic" label="שם פרטי" variant="outlined" />
        <br></br>      
        <br></br> 
        <TextField inputRef={idUserRef} id="outlined-basic" label="תעודת זהות" variant="outlined" required/>
        <br></br>
        <br></br>
        <Button type="submit" onClick={searchByID} variant="outlined">לאשור</Button>
        
        </div>
        </form>
        </>
    )
})

