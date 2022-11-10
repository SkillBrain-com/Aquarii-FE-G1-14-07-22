import "./ColorSquare.css";

const ColorSquare = (props) => {
    return <div className="square" onClick={props.onClick} Style={`background-color: ${props.color};`}></div>;
}

export default ColorSquare;
