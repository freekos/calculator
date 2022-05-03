import React, {useState, useEffect} from "react";

import "./Button.css";

function Button(props) {

    if(props.value === '0') {
        return (
            <div className="button_item1" onClick={() => props.Click(props.value)}>
                <p className="button_p">{props.value}</p>
            </div>
        )
    }else {
        return (
            <div className="button_item2" onClick={() => props.Click(props.value)}>
                <p className="button_p">{props.value}</p>
            </div>
        )
    }
}

export default Button;