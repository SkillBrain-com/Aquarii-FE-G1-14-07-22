import "./ColorSquare.css";

const ColorSquare = (props) => {
    return <div className="square" onClick={props.onClick} style={{backgroundColor: props.color}}></div>;
}

export default ColorSquare;
