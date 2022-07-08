import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Input from "./Input"

export default function Product(props) {

    const [quantity, setQuantity] = useState(0);
    function handleChange(event) {
        const val = event.target.value;
        setQuantity(val);
    }


  return <div className="col-lg-4">
    <div className="card mb-3 text-bg-dark" style={{
      maxWidth: '540px'
    }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img className="img-fluid rounded-start" src={props.mySrc}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title  bg-gradient">{props.itemName}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <div className="card-footer englishQuran">

          <Input onChange={handleChange} myVal={quantity}  myType ="number" Max="10" Min="0"/>
            
            <Button
              onClick={e => {
              console.log("clicked mui Btn")
            }}
              variant="contained"  disabled = { quantity <1? true: null} >Add</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
}