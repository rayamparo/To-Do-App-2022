import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ToDoList from './Pages/ToDoList';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/todos' component={ToDoList}/>
      </Router>
    </div>
  );
}

export default App;
