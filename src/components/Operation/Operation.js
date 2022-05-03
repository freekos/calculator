import React, { useState } from "react";

import "./Operation.css"

function Operation(props) { 

    if(props.id >= 5) {
        return (
            <div className="Operation1" onClick={() => props.Click(props.value)}>
                <p className="operation_p">{props.value}</p>
            </div>
        )
    }else {
        return (
            <div className="Operation2" onClick={() => props.Click(props.value)}>
                <p className="operation_p">{props.value}</p>
            </div>
        )
    }
}

export default Operation;