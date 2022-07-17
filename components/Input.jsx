
export default function Input(props) {


  return (
    <div className="input-group mb-3">
      <span className="input-group-text mb-1">£</span>

      <input
      className="form-control mb-1 me-3"
        type={props.myType}
        name={props.myName}
        value={props.myVal}
        max={props.Max}
        min={props.Min}
        maxLength={props.maxLength}
        onInput ={e =>{"input?"}}
        onChange={(event) => {
          props.onChange(event);
        }}
      ></input>
    </div>
  );
}
