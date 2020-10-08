import React from 'react';
import "./FullName.css";
import propTypes from "prop-types";

export default function FullName(props) {
    return (
        <div>
            <h1 onClick={()=>props.handelChange(props.name)}>{props.name}</h1>
    <span>{props.Bio}</span>
    <br></br>
    <div>{props.profession}</div>
    <br></br>
        {props.children}
        </div>
    );
}
FullName.propTypes= {
    handelChange: propTypes.func,
};
FullName.defaultProps = {
    profession: "No Data description",
};
