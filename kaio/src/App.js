
import './App.css';
import { AddProduct } from './components/server/product/addproduct/index';
import React from 'react'
import Footer from './components/client/footer';
import { Header } from './components/client/header/header';
import ListProduct from './components/server/product/listproduct/listproduct';
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
import EditPage from './components/server/product/listproduct/editPage';
import CreateCategory from './components/server/category/add-category/index'
import HomePage from './components/client/home/index'

 function App() {
   // call api category
  // const fetchCategory = async ()=>{
  // let response = await fetch('http://localhost:3002/products');
  // let data = await response.json();
  // return data
  // }
  // const [albums, setAlbums] = useState([]);
  
  // useEffect(() => {
  //   const getCategory = async () => {
  //     const category = await fetchCategory();
  //     setAlbums(category)
  //   }
  //   getCategory();
    
  // }, [])

  // delete category
  //  const deletedCategory= (id)=>{
  //   fetch(`http://localhost:3002/products/${id}`,{method:"DELETE"});
  //  }

  // thêm category
  // const createProduct= async (dataCate)=>{
  // let res= await fetch('http://localhost:3002/products',{
  //     method:"POST",
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body:JSON.stringify(dataCate)
  //   })
  //   const data = await res.json()
  //     setAlbums([...albums,data])
      
  // }
  
 
   
    
    

  
  // const addProduct = (product)=>{
  //   // console.log(product)
  //   // // setAlbums([
  //   // //   ...albums,
  //   // //   product
  //   // // ])
  //   createProduct(product)
    
  // }

  // const deleted = (id)=>{
  //   deletedProduct(id);
  // }
  
      // useEffect(() => {
        //     const getProducts = async () => {
        //       const Product = await fetchAPI();
        //       setProduct(Product)
        //     }
        //     getProducts();
            
        //   }, [])

  return (
    
    
    <div className="App">
      <div>
      <BrowserRouter>
      <Header />
      
     
        <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create-category" exact component={CreateCategory}/>
          <Route path="/list-product" exact component={ListProduct}/>
          <Route path="/create-product" exact component={AddProduct}/>
          <Route path="/edit-product/:id" exact component={EditPage}/>
        </Switch>
         </main>
        <Footer />
        </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
