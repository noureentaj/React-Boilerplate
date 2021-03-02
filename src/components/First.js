import React, { useState, useEffect } from 'react';
import { basics } from "../services/basics";
import '../styles/App.css';
import { Button} from '@material-ui/core';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

export default function StickyHeadTable() {
    async function fetchData() {
        try {
            const response = await basics.on_login();
            sethcp(response["HCP"]);
            sethco(response["HCO"]);
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const [hcp, sethcp] = React.useState([])
    const [hco, sethco] = React.useState([])
    const handleDrag = (event) => {
        console.log(event.x, event.y)
    }
    const handleStop = (event) => {
        console.log(event)
    }
    const [vis, settablevis] = useState(true)
    return (
        <div>
            <p>HCO CUSTOMERS</p>
            <div className="allSides">
            </div>
            <Button onClick={() => {
                settablevis(!vis)
            }}>Toggle table visiblity</Button>
            <div>
                {vis && hco.map((item, index) => {
                    return (

                        <div key={index}>
                            <p align="left">{index + 1}</p >
                            <Draggable id="a" onDrag={handleDrag} onStop={handleStop}>
                                <p align="left">{item.custId}</p >
                            </Draggable>
                            <p align="left">{item.cust_name}</p >
                        </div >

                    );
                })}
            </div>
        </div>
    );
}
