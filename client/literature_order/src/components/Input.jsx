import {useState} from "react"

export default function Input(props) {

  return <input
    type={props.myType}
    name={props.myName}
    value={props.myVal}
    max={props.Max}
    min={props.Min}
    className="mb-1 me-3"
    onChange={event => {
    props.onChange(event);
  }}></input>
}