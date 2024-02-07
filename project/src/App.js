import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Enter from './component/enter';
import ShowAllTask from './component/showAllTask';
import ShowTask from './component/showTask';
import Login from './component/login';
import AddTask from './component/addTask';
import {BrowserRouter as Router,Switch ,Route,Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
      <div id="div1">
        <div id='div2'>
          {/* <AddTask ></AddTask> */}
          {/* <img src="../image/arrows-wooden-cubes-copy-space.jpg" id='img'></img> */}
          {/* <Login></Login> */}
          {/* <Enter></Enter> */}
          {/* <ShowAllTask></ShowAllTask> */}
          {/* <ShowAllTask idUser={'123456789'}></ShowAllTask> */}
          {/* <ShowTask taskId={'2'}></ShowTask> */}
        <Routes>
         <Route path="/" element={<Enter/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/showAllTask" element={<ShowAllTask/>}/>
         <Route path="/showTask" element={<ShowTask/>}/>
         <Route path="/addTask" element={<AddTask/>}/>
       </Routes>
       </div></div>
      </Provider> 
    </div>
  );
}

export default App;

