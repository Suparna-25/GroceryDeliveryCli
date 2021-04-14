import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Dashboard from './components/product/Dashboard';
import AddProduct from './components/product/AddProduct';
import ViewProduct from './components/product/ViewProduct';
import UpdateProduct from './components/product/UpdateProduct';
import ViewProductByCategory from './components/product/ViewProductByCategory';
import CreateProductButton from './components/product/CreateProductButton';
import CustomerDashboard from './components/product/CustomerDashboard';
import AdminDashboard from './components/product/AdminDashboard';
import AddCategory from './components/category/AddCategory';
import CategoryDashboard from './components/category/CategoryDashboard';
import UpdateCategory from './components/category/UpdateCategory';

function App() {
  return (
    <>
     <Provider store={store}>
      <Router>
      <Navbar/>
     <Route path="/home" component={Home}/>
     <Route path="/dashboard" component={Dashboard}/>
     <Route exact path="/addProduct" component={AddProduct}/>
     <Route exact path="/viewProduct/:productId" component={ViewProduct}/>
     <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
     <Route exact path="/viewProductByCategory/:categoryName"component={ViewProductByCategory}/>
     <Route exact path="/customerDashboard"component={CustomerDashboard}/>
     <Route exact path="/adminDashboard" component={AdminDashboard}/>
       <Route exact path="/addCategory" component={AddCategory}/>
       <Route exact path="/categoryDashboard" component={CategoryDashboard}/>
       <Route exact path="/updateCategory/:categoryId" component={UpdateCategory}/>
      </Router>
      </Provider>   
    </>
  );
}

export default App;