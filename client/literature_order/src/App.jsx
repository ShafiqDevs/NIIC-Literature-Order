import React, {useEffect, useState} from 'react'
import Product from "./components/Product"
import BrandBar from './components/BrandBar';

function App() {

  const [backendData,
    setBackendData] = useState([]);

  useEffect(() => {
    fetch("/getProducts")
      .then(respose => respose.json())
      .then(data => {
        setBackendData(data);
        console.log(data);
      });
  }, [])

  return (
    <div>
    <BrandBar cartItemCount = {1}/>
      <h1>React App</h1>
      <div className='container'>
        <div className='row'>
          {backendData.map((value, index) => {
            return <Product
              itemName
              ={value.itemName}
              text="This item contains a box of 16"
              mySrc="https://i.ebayimg.com/images/g/MrAAAOSwjNFfR4al/s-l500.png"/>
          })}
        </div>
      </div>
    </div>
  )
}

export default App