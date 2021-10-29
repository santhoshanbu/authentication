import React from 'react';
import Addtask from './component/addtask.js';
import './App.css';
import Second from './component/Second.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 

function App() {
   
  // const [showname,updateshowname]=useState('');
  // useEffect(()=>{
  //   axios.get('http://localhost:8000/api').then(res=>{
  //     updateshowname(res.data)
  //   }).catch(err=>console.log(err))
  // },[])

  return (
    <div className="App">
      <Router>
      <div className='title'>CMPS Site</div>
      <Switch >
      <Route path='/' exact component={Addtask } />
      <Route path='/second' component={Second} />
      </Switch >
      </Router>
    </div>
  );
}

export default App;
