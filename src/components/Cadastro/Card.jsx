import React from "react";
import "./card.css";

export default function Card(props) {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            

            <div className="card-container" onClick={() => setOpen(true)}>
                <p1 className="card--id"> {props.id}</p1>
                <p1 className="card--pergunta"> {props.pergunta}</p1>
                <p1 className="card--resp01"> {props.resp01}</p1>
                <p1 className="card--resp02"> {props.resp02}</p1>
                <p1 className="card--resp03"> {props.resp03}</p1>
                <p1 className="card--resp04"> {props.resp04}</p1>
                <p1 className="card--respcorrta"> {props.respcorreta}</p1>
            </div>
        </>);
}