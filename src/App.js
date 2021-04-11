import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import AddCategory from './components/category/AddCategory';
import CategoryDashboard from './components/category/CategoryDashboard';
import UpdateCategory from './components/category/UpdateCategory';

function App() {
  return (
    <>
     <Provider store={store}>
      <Router>
      <Navbar/>
       <Route exact path="/addCategory" component={AddCategory}/>
       <Route exact path="/categoryDashboard" component={CategoryDashboard}/>
       <Route exact path="/updateCategory/:categoryId" component={UpdateCategory}/>
      </Router>
      </Provider>   
    </>
  );
}

export default App;