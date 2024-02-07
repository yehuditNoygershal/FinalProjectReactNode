import React,{useEffect, useRef} from "react";
import { addUser } from "../redux/action";
import { connect } from "react-redux";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import axios from "axios";
import {getUsersList} from '../redux/action';

//מייבאת את רשימת המשתמשים
function mapStateToProps(state){
    return{
        usersList:state.users.usersList
    };
}


export default connect(mapStateToProps)(function Login(props){

    const {usersList,dispatch}=props;
    let idUserRef=useRef('');
    let managerRef=useRef('')
    let firstNameRef=useRef('')
    let lastNameRef=useRef('')
    let emailAddressRef=useRef('');
    let phoneRef=useRef('')


    const getAllUsers=async()=>{
        try{
            const response=await axios.get('http://localhost:5000/users/')
            console.log(response.data);
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

    const addUser=async()=>{
        try{
            const newUser={
                idUser:idUserRef.current.value,
                // manager:managerRef.current.value,
                firstName:firstNameRef.current.value,
                lastName:lastNameRef.current.value,
                emailAddress:emailAddressRef.current.value,
                phone:phoneRef.current.value   

            };
            const response=await axios.post('http://localhost:5000/users/',newUser)
             console.log(response.data);
             dispatch(addUser(response.data))
             alert(`שלום ${firstNameRef.current.value} ${lastNameRef.current.value}`);
        }
        catch(error){
            console.error(error);
        }
    };


    

    useEffect(function show(){
        console.log("רשימת המשתמשים",usersList)
    },[,usersList])


    return(
        <>
        <br></br>
        <br></br>
        <TextField inputRef={firstNameRef} id="outlined-basic" label="שם פרטי" variant="outlined" required />
        <br></br>
        <br></br>
        <TextField inputRef={lastNameRef} id="outlined-basic" label="שם משפחה" variant="outlined" required/>
        <br></br>
        <br></br>
        <TextField inputRef={idUserRef} id="outlined-basic" label="תעודת זהות" variant="outlined" required/>
        <br></br>
        <br></br>
        <TextField inputRef={emailAddressRef} id="outlined-basic" label="email" variant="outlined" required/>
        <br></br>
        <br></br>
        <TextField inputRef={phoneRef} id="outlined-basic" label="מס' טלפון" variant="outlined" required/>
        <br></br>
        <br></br>
        <FormControlLabel control={<Checkbox/>} label="מנהל" />
        <br></br>
        <br></br>
        <Button onClick={addUser} variant="outlined"><Link to="/showAllTask" className="link">לאשור</Link></Button>
       
        </>
    )
})
