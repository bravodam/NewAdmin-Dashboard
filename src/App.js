import Topbar from "./components/topbar/Topbar.jsx"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import "./components/app.css"
import Home from "./components/pages/home/Home.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Product from "./components/pages/product/Product.jsx";


import UserList from "./components/pages/userList/UserList.jsx";
import User from "./components/pages/user/User.jsx";
import NewUser from "./components/pages/newUser/NewUser.jsx";
import NewProduct from "./components/pages/newproduct/NewProduct.jsx"
import ProductList from "./components/pages/productList/ProductList.jsx";


function App() {
  return (

    <BrowserRouter>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="users/*" element={<UserList />} />
        <Route path="user/:userId" element={<User />} />
        <Route path="newUser/" element={<NewUser />} />
        <Route path="products/" element={<ProductList />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="newProduct/" element={<NewProduct />} />
      </Routes>
      </div>
    </BrowserRouter>
    
     
      
  
  );
}

export default App;
