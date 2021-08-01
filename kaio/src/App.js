
import './App.css';
import { AddProduct } from './components/addproduct';
import React, {useState} from 'react'
// import Banner from './components/banner';
// import Content from './components/content';
// import Footer from './components/footer';
// import { Header } from './components/header/header';
 const initialState = [];
function App() {
  // const name = 'kaio shin';
  // const person ={
  //   name:'rin',
  //   age: 21
  // }
  const [albums, setAlbums] = useState(initialState);
  const addProduct = (product)=>{
    // console.log(product)
    setAlbums({
      ...albums,
      product
    })
    console.log(initialState)
  }
  return (
    <div className="App">
      <div>
      {/* <Header /> */}
        <main>
          <AddProduct onAdd={addProduct} />
          {/* <Banner />
          <Content /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
