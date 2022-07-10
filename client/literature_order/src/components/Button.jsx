export default function Button(props) {
  return (
    <button
      type="button"
      className={props.classes}
      onClick={(e) => {
        props.whenClicked();
      }}
    >
      {props.text}
    </button>
  );
}
